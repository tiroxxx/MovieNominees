import './App.css';
import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import API from "./utils/API";
import Results from "./components/Results";

function App() {
  const [movies, setMovies] = useState([]);
  const [nominated, setNominated] = useState([]);

  function search(keyword) {
    console.log(keyword);
    if (keyword.trim() !== "") {
      API.searchMovie(keyword)
        .then(res => {
          if (res === undefined || res.data.Response === "False") {
            
          }
          else {
            setMovies(res.data.Search)
          }
        }).catch(err => {
          if(err) throw err;
        })
    }

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

  function deleteMovie(e) {
    e.preventDefault();
    const movieID = e.target.getAttribute("data-id");
    // filter out the deleted movie
    const arr = nominated.filter(movie => (movie.imdbID !== movieID))
    setNominated(arr);
  }

  function handleInputChange(e) {
    const keyword = e.target.value
    if (keyword === "") {
      setMovies([]);
    }
    search(keyword);
  }


  return (
    <div className="App">
      <Title />
      <Form handleInputChange={handleInputChange} />
      <Results movies={movies}
        nominate={nominate}
        nominated={nominated}
        deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
