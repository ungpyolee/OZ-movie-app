import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { useLocation, Link } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { FaStar } from "react-icons/fa";
import styled from 'styled-components';

const SearchPage = () => {

    const [searchResults, setSearchResults] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const searchTerm = query.get('q');
    const debouncedSearchTerm = useDebounce(query.get('q'), 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const response = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            )
            console.log(response);
            setSearchResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    if (searchResults.length > 0) {
        return (
            <>
                <Wrap>
                {searchResults.map((movie) => (
                    <MovieCardWrap key={movie.id}>
                        <CardLink to={`/${movie.id}`}>
                            <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={`${movie.title} Poster`} />

                            <MovieCardTitle>{movie.title}</MovieCardTitle>
                            <MovieCardAverage><FaStar style={{ marginRight: '.25rem' }} /> {movie.vote_average}</MovieCardAverage>
                        </CardLink>
                    </MovieCardWrap>
                ))}
                </Wrap>
            </>
        )
    } else {
        return (
            <>
                <p>
                    찾고자하는 검색어 {searchTerm} 에 맞는 영화가 없습니다.
                </p>
            </>
        )
    }
}


const Wrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  
  gap:10px;
`

const MovieCardWrap = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  width: calc(20% - 12px);
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
    width: calc(33% - 13.3px);
  }
  @media screen and (max-width: 768px) {
    width: calc(50% - 15px);
  }
  @media screen and (max-width: 420px) {
    width: calc(100% - 20px);
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
  text-decoration: none;
`
export default SearchPage