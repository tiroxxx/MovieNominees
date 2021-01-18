import React from "react"
import Col from "./Col"
import Row from "./Row"

function Results({ movies, nominate, nominated, deleteMovie }) {

    movies.forEach(movie => {
        const nominateButton = document.querySelector("#nominate[data-id=" + movie.imdbID + "]")
        if (nominateButton) {
            // if movie is nominated, disable button
            if (nominated.some(elem => elem.imdbID === movie.imdbID)) {
                nominateButton.disabled = true;
            }
            else {
                nominateButton.disabled = false;
            }
        }

    });

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
                                <button id="nominate" onClick={nominate} data-id={movie.imdbID}>Nominate</button>

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
                </Col>
            </Row>
        </div>
    )
}

export default Results;