import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const MovieDetail = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)
    console.log(movieId)

    const { movieDetail } = axios.get(`movie/${movieId}`)

    console.log(movieDetail)

    return (
        <div>
             
        
        </div>
    )
}

export default MovieDetail