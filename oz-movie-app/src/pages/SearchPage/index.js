import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { useLocation, Link } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import styled from 'styled-components';

const SearchPage = () => {

    const [searchResults, setSearchResults] = useState([])

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const searchTerm = useDebounce(query.get('q'), 500);
    
    const fetchSearchData = async (search) => {
        try {
            const response = await axios.get(
                `/search/multi?include_adult=false&query=${search}`
            )
            setSearchResults(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (searchTerm) {
            fetchSearchData(searchTerm)
        }
    },[searchTerm])

    
    if (searchResults.length > 0) {
        return (
            <>
              
            </>
        )
    } else {
        return (
            <>

            </>
        )
    }
}
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