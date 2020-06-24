import React from "react";
import { Image, Heading } from "@chakra-ui/core";
import { Link } from "wouter";

// AGREGAR DETALLE DE GIF AL DARLE CLICK
const Gifs = ({ title, id, url }) => (
  <div>
    <Link to={`/gif/${id}`}>
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Image loading="lazy" alt={title} src={url} size="100px" rounded="full" />
    </Link>
  </div>
);
//            fallbackSrc='https://media3.giphy.com/media/kBNC5JOuaCvqFtYDk0/giphy.gif?cid=0761258a0a861d1053514c4e5990ab453881fe8dea33e7c3&rid=giphy.gif'

export default Gifs;
