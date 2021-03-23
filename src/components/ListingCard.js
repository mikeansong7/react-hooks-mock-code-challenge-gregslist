import React, {useState} from "react";

function ListingCard({list, handleDelete}) {

  const [favorite, setFavorite]= useState(false)

  function handleFav (){
    setFavorite(!favorite)
  }
  function handleDeleteLocal(){
    console.log("localDelete")
    handleDelete(list.id)

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick= {handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button onClick={handleDeleteLocal}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
