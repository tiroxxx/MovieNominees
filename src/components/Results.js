import React from "react"
import Col from "./Col"
import Row from "./Row"

function Results({ movies, nominate, nominated, deleteMovie }) {

    // movies.forEach(movie => {
    //     if (nominated.some(elem => elem.imdbID === movie.imdbID))
    //         console.log(movie.Title +" is nominated");
    //         return 
    // });

    return (
        <div className="results">
            <Row>
                <Col size="col-6">
                    {movies.map(movie => (
                        <Row key={movie.imdbID}>
                            <Col size="offset-4 col-2">
                                {movie.Poster === "N/A" ?
                                    <img src="https://via.placeholder.com/100x150" alt="Poster" /> :
                                    <img src={movie.Poster} alt="Poster" />}
                            </Col>
                            <Col size="col-6">
                                <p>Title: {movie.Title} ({movie.Year})</p>
                                <button onClick={nominate} data-id={movie.imdbID}>Nominate</button>

                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col size="col-6">
                    {nominated.map(nominatedMovie => (
                        <Row key={nominatedMovie.imdbID}>
                            <Col size="offset-4 col-2">
                                {nominatedMovie.Poster === "N/A" ?
                                    <img src="https://via.placeholder.com/100x150" alt="Poster" /> :
                                    <img src={nominatedMovie.Poster} alt="Poster" />}
                            </Col>
                            <Col size="col-6">
                                <p>Title: {nominatedMovie.Title} ({nominatedMovie.Year})</p>
                                <button onClick={deleteMovie} data-id={nominatedMovie.imdbID}>Delete</button>
                            </Col>
                        </Row>
                    ))}
                    Im here
                </Col>
            </Row>
        </div>
    )
}

export default Results;