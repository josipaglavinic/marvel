import React from "react";
import "../styles/character-item.css";

const CharacterItem = ({ characters, handleFavouritesClick }) => {
  return characters.map((character) => {
    return (
      <li key={character.id} className="characters">
        <div className="chracter-container">
          <img
            src={character.thumbnail.path + "/portrait_xlarge.jpg"}
            alt="character"
            className="image"
          />
          <div className="character-name">{character.name}</div>
          <div className="fav-button">
            <button onClick={() => handleFavouritesClick(character)}>
              Add to favourites
            </button>
          </div>
        </div>
      </li>
    );
  });
};
export default CharacterItem;
