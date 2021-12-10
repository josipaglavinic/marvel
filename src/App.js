import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";
import CharacterItem from "./components/Characters/CharacterItem";
import FavouritesCharacters from "./components/Characters/FavouritesCharacters";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  useEffect(() => {
    getCharacters(name);
  }, [name]);

  const getCharacters = async () => {
    setLoading(true);
    const res = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=addd53fc42514b9697640098a6cfed5b&hash=22eed5906dcd354bb8e60eb93cbe7115`
    );
    console.log(res.data.data);
    setCharacters(res.data.data.results);
    setLoading(false);
  };

  const addFavourites = (character) => {
    const newFavouritesList = [...favourites, character];
    setFavourites(newFavouritesList);
  };

  //pagination
  const indexOffLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOffLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOffLastCharacter
  );

  const currentFavourites = favourites.slice(
    indexOfFirstCharacter,
    indexOffLastCharacter
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <Header name={name} setName={setName} />
      <div className="cards">
        {name.trim() ? (
          <CharacterItem
            loading={loading}
            characters={currentCharacters}
            handleFavouritesClick={addFavourites}
          />
        ) : (
          <FavouritesCharacters favourites={currentFavourites} />
        )}

        <Pagination
          charactersPerPage={charactersPerPage}
          totalCharacters={name.trim() ? characters.length : favourites.lenght}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
