import React, { useState,useffect } from 'react';
import MovieCard from './MovieCard';

function MovieList () {
  const [movies, setMovies] = useState([]);
   useffect(()=>{
    setMovies([
   
    {
      title: 'Furtive',
      description:
        'Furtive is a film, set in a natural park in the province of Buenos Aires, Argentina, which, starting from the themes of corruption, impunity and traffickers, passing through the wild territory of the city, touches and confronts the interior and the conflictual part of the human being.',
      posterURL:
        'https://occ-0-4609-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRvHEWtNwyUMYqVoyOmFFkf2ULSpGh8gzc-22Mc_AojPfZ09STI6dNfRaESLIuf_lfdMxTkHJM_EvaBo1PH2kt_XIJ52iopzOFpvICbni8VY7dqTLKuDxnihusul3Ko-Akpgbg.jpg?r=5a5',
      rating: 9.3,
    },
    {
      title: 'The Gray Man',
      description:
        'When an enigmatic CIA spy discovers dark secrets, he finds himself hunted around the world by a sociopathic agent who has put a price on his head.',
      posterURL:
        'https://occ-0-4609-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRFkBbCyYTjYdaxwujcZCW2DaiYYwZ7xhiQVMiwYQ8JugYMj1GBad-WoJM-IoASY7RQJWzozlm9wfPT04c10Tq819Zp9NdqhUTvwoSePnA5TbfFSUXagzGDVnIIuClxRnYEjNw.jpg?r=fb8',
      rating: 9.2,
    },
    {
      title: 'BAC NORD',
      description:
        'The northern districts of Marseille hold a sad record: the area with the highest crime rate in France. Driven by its hierarchy, the BAC Nord, a field brigade, constantly seeks to improve its results.',
      posterURL:
        'https://occ-0-4609-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSci_4RH14FxueVzhOSqOCPKoFCE6KPhUp2hGhj2I5UWyA5RXQvv9HAJHQfzZof_2kOd-nxI52pxceL686vlyPIUpzPuVXkJkYdS.jpg?r=522',
      rating: 9.0,
    },
  ]);
 },
[])
  return (
    
      <div>
      { movies.map(movie=>(
      <MovieCard key ={movie.title}
       movie ={ movie }
       />
      ))}
        
        </div>
      );
    }

 export default MovieList;
