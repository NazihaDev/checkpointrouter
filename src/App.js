import { useState, useEffect } from "react";
import "./styles.css";
import Movieliste from "./Component/Movieliste";
import AddMovies from "./Component/AddMovies";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  //const [newList, setNewList] = useState("New movie");
  /*const addNewMovie = (newMovie) => {
    setMoviesList([...Movieliste, newMovie]);
  };*/
  useEffect(() => {
    /*console.log("useEffect() called");*/
    fetch("http://127.0.0.1:5500/film.json")
      .then((res) => res.json())
      .then((apiMovie) => {
        setMovies(apiMovie);
        setShowMovies(true);
      });
  }, []);
  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  };
	
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(searchInput);
  });
  let renderMovies = "loading movies...";
  if (showMovies) {
    renderMovies = <Movieliste movies={filteredMovies} />;
  }

  return (
    <div >
      <h1 className="movies">
        Welcome To My movies
      </h1>
      <div className="search">
        <input
          type="search"
          placeholder="search movies"
          onChange={searchMoviesHandler}
        />
      </div>
      <AddMovies addNewMovie={addNewMovie} />
      {renderMovies}
    </div>
  );
};

export default App;

//<AddMovies addNewMovie={addNewMovie} />