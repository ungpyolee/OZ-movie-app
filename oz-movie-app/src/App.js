import './App.css';
import movie from './data/movieListData.json'
import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

console.log(movie);

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route index element={<MainPage />}/>
      </Routes>
    </>
  );
}

export default App;
