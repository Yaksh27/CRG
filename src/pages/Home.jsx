import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){
    

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async() => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
                
            }
            finally{
                setLoading(false);
            }


        }

    loadPopularMovies()

    },[])

    const handleSearch = async(e) =>{
        e.preventDefault();
       if (searchQuery.trim()!== ""){
        setLoading(true);
       }

       try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null);
       } catch (err) {
        console.log(err);
        setError("Failed to search movie...")
       }
       finally{
        setLoading(false);
       }


    }

    return(
        <div className="home">
            <form onSubmit={handleSearch}>
                <input type="text"  
                placeholder="Search for a movie..." 
                className="px-4 py-3 mb-10 border border-gray-800 rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="px-4 py-3 mb-10 ml-4 border text-white bg-gray-600 border-gray-100 rounded-xl hover:bg-gray-400"> 
                    Search
                </button>
            </form>
            <div className="grid grid-cols-1 gap-7 w-96">
            {movies?.map((movie) => 
                 

              (<MovieCard movie={movie} key = {movie.id}/>  
            ))}

    
            </div>
        </div>
    );
}

export default Home;