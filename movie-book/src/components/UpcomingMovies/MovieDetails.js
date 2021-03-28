import { Button } from "react-bootstrap";
import { Avatar } from "../common/Avatar";
import './../common/common.css'

export const MovieDetails = ({ movie }) => {
    if (movie && movie.title)
        return (
            <div className="child">
                <p>Release Date: {movie.releaseState}</p>
                <Avatar url={movie.image} title={movie.title} />
                <p>{movie.plot}</p>
                <Button variant="primary" onClick={() => console.log('Show detail')}>View More...</Button>
            </div>
        )
    return <p className="child">Selecet movie to see detail</p>
}
