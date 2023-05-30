import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Watchlist = () => {
  const {watchlist, removeMovieToWatchlist, moveToWatched} = useContext(GlobalContext)

  return (
    <div className="results">
      {
        watchlist.map(movie => (
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
                <button onClick={() => moveToWatched(movie)} id="btn">İZLENENLERE EKLE</button>
                <button onClick={() => removeMovieToWatchlist(movie)}>KALDIR</button>
            </div>
          </div>
        ))
      }
    </div>
  )
  
};

export default Watchlist;
