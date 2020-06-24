import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import ListGifs from "../../components/ListGifs";

const POPULAR_GIFS = ["Matrix", "Rick", "Morty"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  //const ppp = useLocation(); //Hook from wouter
  console.log("PATH", path);
  const { loading, gifs } = useGifs();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
    console.log("keyword:", keyword);
  };

  const handlechange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handlechange}
          type="text"
          value={keyword}
          placeholder="Search your Gif here..."
        />
        <button>Search</button>
      </form>
      <h3>Ultimos Gifs buscados...</h3>
      <h3>Los Gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popGif) => (
          <li key={popGif}>
            <Link to={`/search/${popGif}`}>Gifs de {popGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
