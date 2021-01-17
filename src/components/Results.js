import React from "react"
import Col from "./Col"
import Row from "./Row"

function Results({ movies }) {

    return (
        <div className="results">
            <Row>
                <Col size="col-6">
                    {movies.map(movie => (
                        <Row>
                            <Col size="col-2">
                                <img src={movie.Poster} alt="Poster" />
                            </Col>
                            <Col size="col-6">
                                <h2>Title: {movie.Title}</h2>
                                <h3>Title: {movie.Year}</h3>
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