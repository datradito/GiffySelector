import React, { useState, useEffect } from "react";
import ListGifs from "../../components/ListGifs";
import getGifs from "../../services/getGifs";
import { Spinner } from "@chakra-ui/core";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    //envio el parametro para ejecute cuando cambie el keyword
    //keyword es una dependencia del efecto
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return (
    <>{loading ? <Spinner color="red.500" /> : <ListGifs gifs={gifs} />}</>
  );
};

export default SearchResults;
