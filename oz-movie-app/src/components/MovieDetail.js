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
                <MovieDetailWrap style={{ color: '#fff' }}>
                    <Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <WrapContent style={{ padding: '1rem' }}>
                        <MovieCardTitle>{movie.title}</MovieCardTitle>
                        <MovieCardAverage><FaStar style={{ marginRight: '.25rem' }} /> {movie.vote_average}</MovieCardAverage>
                        <WrapGenres>
                            {movie.genres.map((genre) => (
                                <Genre key={genre.id}>{genre.name}</Genre>
                            ))}
                        </WrapGenres>
                        <Overview>{movie.overview}</Overview>
                    </WrapContent>
                </MovieDetailWrap>
            ) : (
                <div>영화를 찾을 수 없습니다!</div>
            )}
        </>
    )
}

const WrapContent = styled.div`
    padding:1rem;
    width:50%;
    box-sizing : border-box;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-top : -100px;
        background-color:#000012;
        border-radius : 12px 12px 0 0;
      }
`
const Overview = styled.p`
    line-height: 2rem;
    font-size:1.15rem;
`
const WrapGenres = styled.div`
 display:flex;
`

const Genre = styled.p`
    background-color:#09DBBD;
    color:#000012;
    padding : .25rem .5rem;
    border-radius : 8px;
    margin-bottom : 1rem;
    margin-right:8px;
    font-weight:700;
`

const Img = styled.img`
width:50%;
display:block;
    @media screen and (max-width: 768px) {
    width: 100%;
     margin-top : -100px;
  }
`
const MovieCardTitle = styled.p`
  width:100%;
  font-size:1.75rem;
  font-weight:600;
  padding-bottom:.25rem;
  margin-bottom: 1.5rem;
`
const MovieCardAverage = styled.p`
width:100%;
  font-size:1.2rem;
  text-align:center;
  padding-bottom:.5rem;
  display:flex;
`
const MovieDetailWrap = styled.div`
    overflow:hidden;
    max-width: 1340px;
    margin : 1rem auto;
    border:1px soild black;
    box-sizing:border-box;
    display: flex;
    flex-wrap : wrap;
`

export default MovieDetail;