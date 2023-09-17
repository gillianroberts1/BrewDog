import "./FavouriteBeers.css";

const FavouriteBeers = ({ beers }) => {
  return (
    <div className="shopping-basket">
      {beers.length ? (
        <ul>
          {beers.map((beer) => (
            <li>{beer.name}</li>
          ))}
        </ul>
      ) : (
        <p className="empty-basket">Nothing yet...</p>
      )}
    </div>
  );
};

export default FavouriteBeers;
