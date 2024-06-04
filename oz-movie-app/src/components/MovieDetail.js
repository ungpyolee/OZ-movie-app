import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { FaStar } from "react-icons/fa";
import styled from 'styled-components';

const MovieDetail = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`/movie/${movieId}`);
            console.log(response);
            setMovie(response.data);
        };

        fetchMovie();
    }, [movieId]);


   

    return (
        <>
            {movie ? (
                <MovieDetailWrap style={{color:'#fff'}}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div style={{padding:'1rem'}}>
                    <MovieCardTitle>{movie.title}</MovieCardTitle>
                    <MovieCardAverage><FaStar style={{marginRight:'.25rem'}}/> {movie.vote_average}</MovieCardAverage>
                    <ul >
                            {movie.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    <p>{movie.overview}</p>
                    </div>
                </MovieDetailWrap>
            ) : (
                <div>영화를 찾을 수 없습니다!</div>
            )}
        </>
    )
}
const MovieCardTitle = styled.p`
  width:100%;
  font-size:1.25rem;
  font-weight:700;
  padding-top:.5rem;
  padding-bottom:.25rem;
`
const MovieCardAverage = styled.p`
width:100%;
  font-size:1rem;
  text-align:center;
  padding-bottom:.5rem;
  display:flex;
`
const MovieDetailWrap = styled.div`
    border:1px soild black;
    box-sizing:border-box;
    display: flex;

    img {
        width:50%;
        display:block;
    }
`

export default MovieDetail;