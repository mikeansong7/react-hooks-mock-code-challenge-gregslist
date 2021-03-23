import React from "react";

function Search({search, setSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function updateSearch (event){
    setSearch(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={updateSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
