import React, {useEffect,useState} from 'react'
import axios from './axios';
import {FaPlay, FaSearch} from "react-icons/fa"
import ".//banner.css"

function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + " ..." : str;
}

function Banner() {
    const API_Key = '2f2b0e7d85128378bd4cc23e3b4d8a75'
    const fetchNetflixOriginals =`/discover/tv?api_key=${API_Key}&with_networks=213`;
    const [banners, setBanners] = useState([]);
    const URL = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchNetflixOriginals)
            console.log(request.data.results);
            setBanners(request.data.results[Math.floor(Math.random()* request.data.results.length- 1)])
        }fetchdata();
    },[fetchNetflixOriginals]) 
return (
    <header className='banner'
        style ={{
            backgroundImage:`url(
                ${URL}${banners?.backdrop_path}
                )`,
            backgroundSize:"cover",
        }}
    >
        <div className="banner_content">
            <div className="nav">
                <div className="logo">
                    MovieBOX
                </div>

                <div className="search">
                    <input className='search-box' type="text" placeholder='Search Movies'/>
                    <FaSearch />
                </div>

                <div className="user">
                    <h1>Sign In</h1>
                    <h1 className="burger">=</h1>
                </div>
            </div>
            <div className="search-1">
                    <input className='search-box' type="text" placeholder='Search Movies'/>
                    <FaSearch className='search-icon'/>
            </div>

            <div className="Overview">
                <h1 className="movie_title">
                    {banners?.name||banners?.title||banners?.original_title||banners?.original_name}
                </h1>

                <h1 className="story">
                    {truncate(banners?.overview, 120)}
                </h1>

                <button className="trailer">
                    <FaPlay />
                    <p>
                        Watch trailer
                    </p>
                </button>
              
            </div>
            
        </div>
    </header>
  )
}

export default Banner