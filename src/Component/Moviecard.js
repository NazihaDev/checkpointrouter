import { Link } from "react-router-dom";
const Moviecard = ({ movie }) => {
  const { id, Poster, Title, Year, shortDescription, Ratings } = movie;
  return (
    <div className="movie-card">
      <div class="movie-img">
        <img src={Poster} alt={Title} />
      </div>
      <div class="card-body">
        <Link to={`/movies/${id}`}>
          <h2 className="movie-title">{Title}</h2>
        </Link>
        <span className="movie-year">{Year}</span>
        <p class="movie-description">{shortDescription}</p>
        <p class="movie-Rati">{Ratings}</p>
      </div>
    </div>
  );
};
export default Moviecard;
