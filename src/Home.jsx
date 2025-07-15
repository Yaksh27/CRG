import { useEffect, useState } from "react";
import { getNewsArticles, searchNewsArticles } from "./api";



function Home(){

    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchNews, setSearchNews] = useState("");

    useEffect(() => {
      const loadNews = async() =>{

        try {
         const newsArticles = await getNewsArticles()
         setArticles(newsArticles)
          console.log(newsArticles);
        
        } catch (err) {
            console.log(err)
        }
        finally{
            setLoading(false)
        }
      }  
      loadNews();
    },[])

   const handleSearch = async(e) => {
    e.preventDefault();
    
    if (!searchNews.trim()) return; // Don't search if input is empty
    
   
    try {
        const searchResults = await searchNewsArticles(searchNews);
        setArticles(searchResults); // Replace current articles with search results
        console.log("Search results:", searchResults);
    } catch (err) {
        console.log("Search error:", err);
        setError("Failed to search news");
    } finally {
        
    }
}


    return(
        <div>
            <h1 className="text-4xl font-bold text-center mb-10">Tech Crunch News Headlines Feed</h1>

            <form onSubmit={handleSearch}>
                <input type="text" 
                className="w-72 px-4 border py-3 mb-12 rounded-3xl "
                placeholder="Search for news..."
                value={searchNews}
                onChange={(e) => setSearchNews(e.target.value)}/>
            <button className=" w-22  border py-1 ml-12 rounded-xl bg-gray-800 text-white hover:bg-gray-500 hover:scale-110 transform">
                Search News
            </button>
                
            </form>
            
            <div className="grid grid-cols-3 gap-x-8 gap-y-8">
    {articles.map((news, index) => (
       
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href={news.url}>
                <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">{news.title}</h5>
            </a>
            <img src={news.urlToImage} alt="news image" className="p-2 mt-2 mb-2 rounded-4xl" />
            <p className="mb-5 font-normal mt-3 text-gray-700 dark:text-gray-400">{news.description}</p>
            <a href={news.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 hover:scale-110 focus:ring-1 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <p className="text-black font-medium bg-[#ffde59] p-2 w-max-sm  rounded-2xl mt-6"> by - {news.author}</p>
        </div>
    ))}
</div>




        </div>
    )

}

export default Home;

