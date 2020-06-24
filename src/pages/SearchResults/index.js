import React from "react";
import ListGifs from "../../components/ListGifs";
import useGifs from "../../hooks/useGifs";
import { Spinner } from "@chakra-ui/core";

export default function SearchResults({ params }) {
  console.log("params: ", params);
  const { keyword } = params;

  const { loading, gifs } = useGifs({ keyword });
  console.log({ loading, gifs });
  return (
    <>{loading ? <Spinner color="red.500" /> : <ListGifs gifs={gifs} />}</>
  );
}
