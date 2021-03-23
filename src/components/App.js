import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

    const [listings, setListings] = useState([])
    const [search, setSearch] = useState("")
  
  useEffect(
  () => {
      fetch("http://localhost:6001/listings")
          .then(r => r.json())
          .then(newListings => {
            setListings(newListings)   
         })   
          },[]  
      )

      const filterListings = listings.filter(list => {
        // return list.description.includes(search)
        return list.description.toLowerCase().includes(search.toLowerCase())
      })


  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={filterListings}/>
    </div>
  );
}
  
export default App;
