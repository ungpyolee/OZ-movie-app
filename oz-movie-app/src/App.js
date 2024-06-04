import './App.css';
import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import movieList from './data/movieListData.json'
import { useState, useEffect, useNavigate } from 'react'
import SignupPage from './pages/SignupPage';


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
          <Route index element={<LoginPage />}/>
          <Route path='/main' element={<MainPage movies={movies} />} />
          <Route path='/:movieId' element={<DetailPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;

