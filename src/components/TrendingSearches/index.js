import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import { Spinner } from "@chakra-ui/core";

//import() es async y devuelve una promesa
const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  //El Hook nos dice si elemento que le pasamos por parametro esta cerca de la pantalla
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
}
