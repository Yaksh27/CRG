import { useContext } from "react";
import { useMovieContext } from "../contexts/MovieContext";


function MovieCard({movie}){
    const { isFavorites, addToFavorites, removeFavorites } = useMovieContext()  
    const favorite = isFavorites(movie.id)

    function onFavoriteClick(e){
        e.preventDefault();
        if (favorite) removeFavorites(movie.id)
        else addToFavorites(movie)
    
    }

    return(
        <div className="">
            <div className="border flex flex-col gap-y-3.5 rounded-xl relative">
                <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title}/>
                    <button className={`absolute top-2 right-2 h-7 w-7 border rounded-full transition-all duration-200 
                    ${favorite 
                           ? 'bg-green-500 hover:bg-green-600 text-white scale-110' 
                           : 'bg-amber-300 hover:bg-orange-100 text-gray-700'
                   }`}
                   onClick={onFavoriteClick}>
                       {favorite ? '❤️' : '💓'}
                   </button>
                
                <div>
                    <h3 className="text-2xl font-medium text-left">{movie.title}</h3>
                    <p className="text-lg bg-blue-200 rounded-lg w-fit font-medium text-left">{movie.release_date}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieCard;