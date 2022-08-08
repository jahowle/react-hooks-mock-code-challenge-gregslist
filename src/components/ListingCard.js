import React, {useState} from "react";

function ListingCard({description, image, location, id, onHandleDelete }) {

  const [fav, setFav] = useState(false)

  function handleFav() {
    setFav(!fav)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onHandleDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
