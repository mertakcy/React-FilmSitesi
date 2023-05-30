import { useContext } from 'react';
import '../styles/ResultCard.css'
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({movie}) => {
  const {addMovieToWatchlist, watchlist} = useContext(GlobalContext)

  const storedMovie =  watchlist.find(item => item.id === movie.id)

  return (
    <div className="result-card">

            {movie.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
                : <img id='gray' src={`https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png`}/>
            }

            <div className="movie-details">
              <div className='detail'>
                <h2>{movie.title}</h2>
                <h3>{movie.release_date ? movie.release_date.slice(0,4) : '-'}</h3>
                <h3>IMDB: {movie.vote_average ? movie.vote_average.toFixed(1) : '-'}</h3>
              </div>
                <button disabled={storedMovie} onClick={() => addMovieToWatchlist(movie)}>İZLENECEKLERE EKLE</button>
            </div>
    </div>
  )
};

export default ResultCard;
