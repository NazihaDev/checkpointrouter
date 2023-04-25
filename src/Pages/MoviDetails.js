import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import MovieDetails from "./Pages/MoviDetails";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`http://localhost:8000/movies/${params.id}`);
      const data = await result.json();
      setMovie(data);
    };
    getMovie();
  }, []);
  const { id, Poster, Title, Year, description, Ratings } = movie;
  return (
    <div className="movie-card">
      <div class="movie-img">
        <img src={Poster} alt={Title} />
      </div>
      <div class="card-body">
        <h2 className="movie-title">{Title}</h2>
        <span className="movie-year">{Year}</span>
        <p class="movie-description">{description}</p>
        <p class="movie-Rati">{Ratings}</p>
        <Link to={`/`}>
          <h2>Home</h2>
        </Link>
        {/*<link to=""></link>*/}
        {/**<Route path="movies/:id" element={<MovieDetails />} /> */}
        
      </div>
    </div>
  );
};
export default MovieDetails;
