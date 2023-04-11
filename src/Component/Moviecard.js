
const Moviecard = ({ movie }) => {
  const { Poster, Title, Year, description, Ratings } = movie;
  return (
    
    <div className="movie-card" >
      <div class="movie-img"> 
   <img src={Poster} alt={Title} />
   </div>
   <div class="card-body">
      <h2 className="movie-title">{Title}</h2>
      <span className="movie-year">{Year}</span>
      <p class="movie-description">{description}</p>
      <p class="movie-Rati">{Ratings}</p>
      </div>
    </div>
    
  );
};
export default Moviecard;

