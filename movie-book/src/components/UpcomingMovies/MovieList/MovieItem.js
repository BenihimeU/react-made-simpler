import { Avatar } from "../../common/Avatar";
import "./movie.css";

export const MovieItem = ({ movie, onPress }) => {
    return (
        <div className="movie-item separator" onClick={() => onPress(movie)}>
            <Avatar className="avatar-style" url={movie.image} title={movie.title} />
            <div className="movie-list-desc">
                <p>Release Date: {movie.releaseState}</p>
                <p>Rating: {movie.contentRating}</p>
                <p>Duraion: {movie.runtimeStr || "NA"}</p>
            </div>
        </div>
    )
}
