import './App.css';
import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import movieList from './data/movieListData.json'
import { useState, useEffect } from 'react'


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const dummyMovies = movieList.results
    setMovies(dummyMovies)
  }, [])

  return (
    <>
     <Routes>   
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage movies={movies} />} />
          <Route path=':movieId' element={<DetailPage />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;

