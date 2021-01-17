import './App.css';
import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import API from "./utils/API";
import Results from "./components/Results";
import NominatedMovies from "./components/Nominated"

function App() {
  const [movies, setMovies] = useState([]);
  const [nominated, setNominated] = useState([]);
  // const [formInput, setFormInput] = useState([]);


  function search(e) {
    e.preventDefault();
    API.searchMovie("Rambo")
      .then(res => {
        if (res === undefined || res.data.Response === "False") {
          console.log("not found");
        }
        else {
          setMovies(res.data.Search)
        }
      })
  }

  function nominate(e) {
    e.preventDefault();
    const movie = [...nominated];
    const movieID = e.target.getAttribute("data-id");
    // find movie that we want to nominate
    movie.push(movies.find(x => x.imdbID === movieID));
    console.log(movie);
    setNominated(movie)

  }



  return (
    <div className="App">
      <Title />
      <Form search={search} />
      <Results movies={movies}
        nominate={nominate}
        nominated={nominated} />
    </div>
  );
}

export default App;
