import React from "react";
import Gif from "../Gif";

//TODO Ver display:grid
//TODOfracciones en columnas
//TODO grid_template-rows: masonry
const ListGifs = ({ gifs }) => {
  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </>
  );
};

export default ListGifs;
