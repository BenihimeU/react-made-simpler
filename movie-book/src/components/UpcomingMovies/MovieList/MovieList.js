import { MovieItem } from "./MovieItem";

const MovieList = (props) => {
    const { movies, onPress } = props;
    const renderMovieList = () => {
        if (movies.length)
            return movies.map(movie => {
                return <MovieItem movie={movie} onPress={onPress} />
            });
        return <p>No upcoming movies</p>
    }
    return (
        <div className="child">
            <h4>Movie by Latest</h4>
            {renderMovieList()}
        </div>
    )
};
export default MovieList;