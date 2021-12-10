import React from "react";
import "../styles/character-item.css";

const FavouritesCharacters = ({ favourites, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  } else {
    return favourites.map((favourite) => {
      return (
        <li key={favourite.id} className="characters">
          <div className="chracter-container">
            <img
              src={favourite.thumbnail.path + "/portrait_xlarge.jpg"}
              alt=""
            />
            <div className="character-name">{favourite.name}</div>
          </div>
        </li>
      );
    });
  }
};

export default FavouritesCharacters;
