import './App.css'
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import { Movies } from './components/Movies';
import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback( 
    debounce(search => {
    getMovies({ search })
    }, 400)
    ,[getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(event.target.value)
    debouncedGetMovies(newSearch )
  }
    
  return (
    <div className='page'>

      <header>
        <h1>Movie Search</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder="Avengers, Star Wars, The Matrix ..." />
          <button type="submit">Buscar</button>
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <span>Orden alfabético</span>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p> }
      </header>

      <main>
        {
          loading ? <p>Cargando ...</p> : null
        }
        <Movies movies={movies} />
      </main>
    </div>
  );
} 

export default App;
