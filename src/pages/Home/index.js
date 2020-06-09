import React, { useState } from "react";
import ListGifs from "../../components/ListGifs";
import { Link, useLocation } from "wouter";
import { Button } from "@chakra-ui/core";

const POPULAR_GIFS = ["Matrix", "Rick", "Morty"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation(); //Hook from wouter

  const handleOnSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
    console.log(keyword);
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
};

export default Home;
