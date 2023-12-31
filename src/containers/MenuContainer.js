import { useEffect, useState } from "react";
import { GrBasket } from "react-icons/gr";
import TitleBar from "../components/TitleBar";
import BeerDetail from "../components/BeerDetail";
import FavouriteBeers from "../components/FavouriteBeers";
import AllBeers from "../components/AllBeers";
import SearchBar from "../components/SearchBar";
// import Header from "../components/Header";

const MenuContainer = () => {
  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState([]);
  const [favouriteBeers, setFavouriteBeers] = useState([]);
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = function () {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((beers) => {
        setBeers(beers);
        setSelectedBeer(beers);
      })
      .catch((err) => console.error(`Loading menu error: ${err}`));
  };

  const onBeerSelected = (beer) => {
    setSelectedBeer(beer);
  };

  const handleBeerClick = (beer) => {
    setSelectedBeer(beer);
  };

  const favouriteSelected = (beer) => {
    const newFavourites = [...favouriteBeers];
    newFavourites.push(beer);
    setFavouriteBeers(newFavourites);
  };

  const handleSearch = (input) => {
    const results = beers.filter((beer) => {
      const lowerInput = input.toLowerCase();

      return (
        beer.name.toLowerCase().includes(lowerInput) ||
        beer.abv.toString().includes(lowerInput) ||
        beer.description.toLowerCase().includes(lowerInput) ||
        beer.first_brewed.includes(lowerInput)
      );
    });

    setSelectedBeer(results);
  };

  return (
    <>
      <div className="header">
        <div>
          <button
            className="basket"
            onClick={() => setBasketIsOpen(!basketIsOpen)}
          >
            <GrBasket id="gr-basket" />
          </button>
          {basketIsOpen && <FavouriteBeers beers={favouriteBeers} />}
        </div>
        <div className="search-bar-container">
          <SearchBar handleSearch={handleSearch} />
          <p className="search-instructions">
            Search by name, year, abv, description
          </p>
        </div>
      </div>

      <TitleBar beers={beers} onBeerSelected={onBeerSelected} />
      <div className="beer-container">
        {selectedBeer ? (
          selectedBeer.length ? (
            <AllBeers
              beers={selectedBeer}
              handleButtonClick={handleBeerClick}
            />
          ) : (
            <BeerDetail beer={selectedBeer} newFavourites={favouriteSelected} />
          )
        ) : null}
      </div>
    </>
  );
};

export default MenuContainer;
