import React from "react";
import "./App.css";
import { Input, Image } from "@chakra-ui/core";
import { Route, Link } from "wouter";
import ListGifs from "./components/ListGifs";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <Image
            rounded="full"
            size="150px"
            src="\nuclear-energy.png"
            alt="Datwebdesign Logo"
          />
        </Link>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
