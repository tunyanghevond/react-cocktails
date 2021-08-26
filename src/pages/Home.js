import React from "react";
import CocktailList from "../components/CocktailList";
import SearchFrom from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <SearchFrom />
      <CocktailList />
    </div>
  );
};

export default Home;
