import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Watched = () => {
  const {watched,removeMovieToWatched,moveToWatclist} = useContext(GlobalContext)

  return (
    <div className="results">
      {
        watched.map(movie => (
          <div className="result-card" key={movie.id}>

            {movie.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
                : <img id='gray' src={`https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png`}/>
            }

            <div className="movie-details">
              <div className='detail' id="margin">
                <h2>{movie.title}</h2>
                <h3>{movie.release_date ? movie.release_date.slice(0,4) : '-'}</h3>
                <h3>IMDB: {movie.vote_average ? movie.vote_average.toFixed(1) : '-'}</h3>
              </div>
                <button onClick={() => moveToWatclist(movie)} id="btn">İZLENECEKLERE EKLE</button>
                <button onClick={() => removeMovieToWatched(movie)}>KALDIR</button>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default Watched;
