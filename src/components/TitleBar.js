import "./TitleBar.css";

const TitleBar = ({ beers, onBeerSelected }) => {
  const menuOptions = beers.map((beer, index) => {
    return <option value={index}>{beer.name}</option>;
  });

  const handleSelectChange = ({ target: { value } }) => {
    if (value === "all") {
      onBeerSelected(beers);
    } else {
      const chosenBeer = beers[value];
      onBeerSelected(chosenBeer);
    }
  };

  return (
    <div className="menu-container">
      {/* <img className="logo" src="" alt="logo"/> */}
      <h1 className="title">BREWDOG MENU</h1>
      <hr className="break"></hr>

      
      <select defaultValue="" onChange={handleSelectChange}>

        <option value="" selected>
          Select Beer
        </option>
        <option value="all">
          <b>Shop Entire Range</b>
        </option>
        {menuOptions}
      </select>
      <hr className="break"></hr>

    </div>
  );
};

export default TitleBar;
