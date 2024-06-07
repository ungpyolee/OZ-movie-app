import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import axios from '../api/axios';
import requests from '../api/request'

const MovieCard = () => {

  const [movies, setMovies] = useState([]);

  const filterResults = (data) => {
    return data.filter((item) => item.title && item.backdrop_path);
  }

  const fetchMovieData = useCallback(async () => {
    try {
      const response = await axios.get(requests.fetchTopRated);
      const filterData = filterResults(response.data.results);
      setMovies(filterData);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  }, []);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);


  return (
    <>
      {movies.map((movie) => (
        <MovieCardWrap key={movie.id}>
          <CardLink to={`/${movie.id}`}>
            <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`${movie.title} Poster`} />

            <MovieCardTitle>{movie.title}</MovieCardTitle>
            <MovieCardAverage>
              <FaStar style={{ marginRight: '.25rem' }} /> 
              {movie.vote_average}</MovieCardAverage>
          </CardLink>
        </MovieCardWrap>
      ))}
    </>
  );
}

const MovieCardWrap = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  width: calc(20% - 8px);
  border: 1px solid #2F363D ;
  border-radius : 5px;
  box-sizing : border-box;
  overflow: hidden;
  cursor:pointer;
  transition:.2s ease-in-out;
  
  &:hover {
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.02);
    border-color: rgba(249, 249, 249, 0.8);
  }
  @media screen and (max-width: 1200px) {
    width: calc(33% - 4.5px);
  }
  @media screen and (max-width: 768px) {
    width: calc(50% - 5px);
  }
  @media screen and (max-width: 420px) {
    width: calc(100%);
  }
  
`

const MovieImg = styled.img`
  width:100%;
  
`

const MovieCardTitle = styled.p`
  width:100%;
  font-size:1.25rem;
  font-weight:700;
  text-align:center;
  padding-top:.5rem;
  padding-bottom:.25rem;
  color:#fff;
`

const MovieCardAverage = styled.p`
width:100%;
  font-size:1rem;
  text-align:center;
  padding-bottom:.5rem;
  display:flex;
  justify-content : center;
  color:#fff;
  
`
export const CardLink = styled(Link)`
  all:unset;  
  text-decoration: none;
  padding:0;
`
export default MovieCard