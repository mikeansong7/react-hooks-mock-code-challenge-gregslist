import React, {useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const listingGroup = listings.map((list) => {
    return <ListingCard key={list.id} description={list.description} image={list.image} location={list.location}/>
    
  })
  return (
    <main>
      <ul className="cards">
       {listingGroup}
      </ul>
    </main>
  );
}

export default ListingsContainer;
