import React, { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Category({ name, options = [] }) {
  return (
    <>
      <h3>{decodeURI(name)}</h3>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <Link to={`/search/${option}`}>{option}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
