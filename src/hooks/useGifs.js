import { useEffect, useState, useContext } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INIT_PAGE = 0;
export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { loadingnextpage, setLoadingNextPage } = useState(false);
  const [page, setPage] = useState(INIT_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  //recover keyword from localstorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(
    function () {
      //envio el parametro para ejecute cuando cambie el keyword
      //keyword es una dependencia del efecto
      setLoading(true);

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        console.log("keywordToUse:", keywordToUse);
        setGifs(gifs);
        setLoading(false);
        //save keyword to localstorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, keywordToUse, setGifs]
  );

  useEffect(() => {
    if (page === INIT_PAGE) return;
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { loading, loadingnextpage, gifs, setPage };
}
