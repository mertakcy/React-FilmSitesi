import { useState } from 'react';
import '../styles/Add.css'
import ResultCard from './ResultCard';

const Add = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    const onChange = (e) => {
        setSearch(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8e9b14ff4c4e3e95e6c9296b2e8852ac&language=en-US&page=1&include_adult=false&query=${search}`)
        .then(res => res.json())
        .then(data => setResults(data.results))
        console.log(results);
    }

  return (
    <div>
        <div className="image">
            <img src="https://oneilcinemas.com/site/assets/files/1649/epping-rent-a-theatre.jpg" />
            <input value={search} onChange={(e) => onChange(e)} placeholder='Film, dizi, kişi ara...' />
        </div>
        <div className="results">
            {results.length > 0 &&
                results.map(movie => (
                    <ResultCard key={movie.id} movie={movie} />
                ))
            }
        </div>
    </div>
  )
};

export default Add;
