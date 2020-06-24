import React from "react";
import Gif from "../Gif";

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
