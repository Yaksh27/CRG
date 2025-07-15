import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

function Favorite(){
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return (
            <div>
                <h2>No favorites yet!</h2>
            </div>
        );
    }

    return (
        <div>
            <h2>Your Favorite Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Favorite;