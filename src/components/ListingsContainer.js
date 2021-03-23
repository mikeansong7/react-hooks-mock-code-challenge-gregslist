import React, {useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  const listingGroup= listings.map((listObj) => {
    return <ListingCard handleDelete={handleDelete} key= {listObj.id} list={listObj}/>;
  }
  )
  return (
    <main>
      <ul className="cards">
       {listingGroup}
      </ul>
    </main>
  );
}

export default ListingsContainer;
