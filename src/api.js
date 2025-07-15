const API_KEY="9553aa68c5e549efb9598358924f6fdb"
const BASE_URL="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9553aa68c5e549efb9598358924f6fdb"

export const getNewsArticles = async () => {
   try {
    const response = await fetch(BASE_URL);

    if(!response.ok){
        throw new Error("Failed to fetch api"); // Change: throw error instead of just console.log
    }
    const data = await response.json();
    return data.articles;

   } catch (error) {
        throw error;
   }
};


export const searchNewsArticles = async (query) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(query)}&apiKey=9553aa68c5e549efb9598358924f6fdb`)
        const data = await response.json();
        return data.articles;
    } catch (error) {
        throw error;
    }
    
};