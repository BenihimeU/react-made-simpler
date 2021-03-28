import MovieList from "./MovieList/MovieList";
import movies from '../../data.json';
import { MovieDetails } from "./MovieDetails";
import './../common/common.css';
import { Component } from "react";

export default class UpcomingMovies extends Component {
    state = {
        selectedMovie: {}
    }
    componentDidMount() {

    }

    renderContent() {

    }

    render() {
        return (
            <>
                <h3>Upcoming movies</h3>
                <div className='app-content'>
                    <MovieList movies={movies} onPress={movie => this.setState({
                        selectedMovie: movie
                    })} />
                    <MovieDetails movie={this.state.selectedMovie} />
                </div>
            </>
        )
    }
}