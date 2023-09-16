import "./BeerDetail.css";

const BeerDetail = ({ beer, newFavourites }) => {
  const handleButtonClick = () => {
    newFavourites(beer);
  };

  return (
    <article className="beer-card">
      <img className="beer-card-image" src={beer.image_url} alt={beer.name} />

      <div className="beer-card-info">
        <p className="beer-card-info-name">
          {beer.name} {beer.abv}
        </p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>

        <button onClick={handleButtonClick}>Add to Basket</button>
      </div>
    </article>
  );
};
export default BeerDetail;
