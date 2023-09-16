const FavouriteBeers = ({ beers }) => {
  return (
    <>
      <h1>Shopping Basket</h1>
      {beers && beers.map((beer) => <p>{beer.name}</p>)}
    </>
  );
};

export default FavouriteBeers;
