import './App.css';
import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import API from "./utils/API";
import Results from './components/Results';

function App() {
  const [movies, setMovies] = useState([]);
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
          console.log(res.data.Search);
        }
      })
  }




  return (
    <div className="App">
      <Title />
      <Form search={search}/>
      <Results movies={movies} />
    </div>
  );
}

export default App;
