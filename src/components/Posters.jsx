import React,{useEffect, useState} from 'react';
import axios from './axios';
import "../components/Poster.css"
// import {FaAngleRight} from "react-icons/fa"


function Posters() {

    const [movies, setMovies] = useState([]);
    const API_Key = '2f2b0e7d85128378bd4cc23e3b4d8a75';
    const fetchTrending =`/trending/all/week?api_key=${API_Key}&language=en-US`;
    const URL = "https://image.tmdb.org/t/p/original/"
    const more="See More >"

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchTrending)
            // console.log(request);
           setMovies(request.data.results)
        //    console.log(movies.length)
        }fetchdata();

    },[fetchTrending]) 
    return (
    <div className='container'>
        <div className="title">
            <div className="featured">
                <h2>Featured Movies</h2>
            </div>
            <div className="more">
                <h3>{more}</h3>
            </div>
        </div>

        <div className="card" data-testid ='movie-card'>
            {movies.map(movie=>(   
                <div className='box'>
                    <div className="poster">
                        <div className="image">
                            <img data-testid= "movie-poster" className = "posterimg" src={`${URL}${movie.poster_path}`} alt={movie.name} />
                        </div> 
                    </div>

                    <div className="details">
                        <p className="movie-title" data-testid= "movie-title" >{movie.original_title ? movie.original_title:movie.original_name}</p>
                        <p className ="movie-release-date "data-testid= "movie-release-date">{movie.release_date?movie.release_date:movie.first_air_date}</p>
                    </div>
                </div>             
            ))}
        </div>
    </div>
  )
}

export default Posters