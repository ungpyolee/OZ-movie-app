import React from 'react'
import MovieCard from '../../components/MovieCard'
import styled from 'styled-components'

const MainPage = ({movies}) => {
  return (
    <div>
      <Wrap>
        <MovieCard movies={movies}/>
      </Wrap>
    </div>
  )
}


const Wrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  
  gap:10px;
`
export default MainPage