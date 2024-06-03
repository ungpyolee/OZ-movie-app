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
  min-width : 1320px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:0;
  gap:10px;
`
export default MainPage