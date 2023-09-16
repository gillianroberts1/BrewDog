import "./TitleBar.css";
 
const TitleBar = ({ beers, onBeerSelected }) => {
  const menuOptions = beers.map((beer, index) => {
    return <option value={index}>{beer.name}</option>;
  });

  const handleSelectChange = (event) => {
    if (event.target.value === "all") {
      onBeerSelected(beers);
    } else {
      const chosenBeer = beers[event.target.value];
      onBeerSelected(chosenBeer);
    }
  };

  return (
    <div className="menu-container">
      <h1 className="title">BREWDOG MENU</h1>
      <select defaultValue="" onChange={handleSelectChange}>
        <option value="" selected>
          Select Beer
        </option>
        <option value="all">
          <b>Shop Entire Range</b>
        </option>
        {menuOptions}
      </select>
    </div>
  );
};

export default TitleBar;
