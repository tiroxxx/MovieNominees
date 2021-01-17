import React from "react"
import Col from "./Col"
import Row from "./Row"

function Results({ movies }) {

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
                                <button data-id={movie.imdbID}>Nominate</button>
                                
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col size="col-6">
                    Im here
                </Col>
            </Row>
        </div>
    )
}

export default Results;