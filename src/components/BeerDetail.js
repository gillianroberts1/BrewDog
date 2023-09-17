import { useState } from "react";
import "./BeerDetail.css";

const BeerDetail = ({ beer, newFavourites }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    newFavourites(beer);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="beer-card">

      <img className="beer-card-image" src={beer.image_url} alt={beer.name} />
      <button className="fav-btn" onClick={handleButtonClick}>Add to Basket</button>

      <div className="beer-card-info">
        <p className="beer-card-info-name">
          {beer.name} {beer.abv}
        </p>

        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        

        

<div className="description-container">
  <p>Description</p>
        {beer ?  (
          <button onClick={toggleExpanded}>
            {isExpanded ? "-" : "+"}
            </button>
          
        ) : null}
        </div>

        {isExpanded && (
          <div className="beer-card-description">
            <p>{beer.description}</p>
          </div>
        )}

      </div>
    </article>
  );
};
export default BeerDetail;
