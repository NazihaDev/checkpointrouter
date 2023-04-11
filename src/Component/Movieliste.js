import Moviecard from "./Moviecard";
const Movieliste = ({ movies }) => {
  return (
    <div className="grid ">
      {movies.map((movie) => {
        return <Moviecard movie={movie} />;
      })}
    </div>
  );
};

export default Movieliste;

