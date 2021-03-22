import React, {useState} from "react";

function ListingCard({description, image, location,}) {

  const [favorite, setFavorite]= useState(false)

  function handleFav (){
    setFavorite(!favorite)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick= {handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
