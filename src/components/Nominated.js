import React from "react";
import Row from "./Row";
import Col from "./Col";

function NominatedMovies({ nominated }) {
    return (
        nominated.map(nominatedMovie => (
            <Row key={nominatedMovie.imdbID}>
                <Col size="offset-4 col-2">
                    {nominatedMovie.Poster === "N/A" ?
                        <img src="https://via.placeholder.com/100x150" alt="Poster" /> :
                        <img src={nominatedMovie.Poster} alt="Poster" />}
                </Col>
                <Col size="col-6">
                    <p>Title: {nominatedMovie.Title} ({nominatedMovie.Year})</p>                </Col>
            </Row>
        ))
    )
}

export default NominatedMovies;