import React, { useRef, useEffect, useCallback } from "react";
import ListGifs from "components/ListGifs";
import useGifs from "hooks/useGifs";
import { Spinner, Button } from "@chakra-ui/core";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  console.log("params: ", params);
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  //Actualizo el state mediante una funcion
  const handleNestPage = () => setPage((prevPage) => prevPage + 1);

  //debounce -> Agrupa las llamadas a la funcion y podemos establecer un tiempo para que
  //luego de ese periodo se ejecute una vez mas
  const debounceHandleNextPage = useCallback(
    debounce(handleNestPage(), 150),
    []
  );

  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);
  return (
    <>
      {loading ? (
        <Spinner color="red.500" />
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
