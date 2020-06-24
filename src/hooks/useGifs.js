import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    function () {
      //envio el parametro para ejecute cuando cambie el keyword
      //keyword es una dependencia del efecto
      setLoading(true);
      //recover keyword from localstorage
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        console.log("keywordToUse:", keywordToUse);
        setGifs(gifs);
        setLoading(false);
        //save keyword to localstorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword]
  );

  return { loading, gifs };
}
