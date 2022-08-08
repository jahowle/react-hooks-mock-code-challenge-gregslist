import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({searchTerm}) {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => setListings(items))
  }, [])

  function handleDelete(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  const listingsToDisplay = listings.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase())).map((listing) => {
    return (
      <ListingCard onHandleDelete={handleDelete} key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} />
    )
  })

  // const listingsToDisplay = listings.map((listing) => {
  //   return (
  //     <ListingCard onHandleDelete={handleDelete} key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} />
  //   )
  // })


  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
