import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//7a24fa48


const API_URL = 'https://www.omdbapi.com?apikey=7a24fa48';

const App = () => {

  const [movies,setMovies] = useState([]);
  const [search,setSearch] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    //console.log(response);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);
  return (
    <div className="app">
      <h1>FilmBox</h1>

      <div className='search'>
        <input 
          placeholder='Search For Movies'
          value={search}
          onChange={(e)=> {setSearch(e.target.value)}}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={()=>{
            searchMovies(search);
          }}
        />
      </div>

      {
        movies.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => {

              return <MovieCard movie={movie}/>
            })}
          </div>
        )
        : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
