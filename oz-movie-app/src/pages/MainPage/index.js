import React from 'react'
import MovieCard from '../../components/MovieCard'
import styled from 'styled-components'

const MainPage = ({ movies }) => {
  return (
    <div>
      <Wrap>
        <MovieCard movies={movies} />
      </Wrap>
    </div>
  )
}


const Wrap = styled.div`
  max-width: 2560px;
  margin: 0 auto;
  display:flex;
  flex-wrap: wrap;
  justify-content: start;
  padding:10px;
  gap:10px;
`
export default MainPage