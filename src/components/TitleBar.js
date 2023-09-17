import "./TitleBar.css";
import logo from "../images/brewdoglogo-removebg-preview (1).png"




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
      <img id="logo" src={logo} alt="Logo"/>
      {/* <img id="background-img" src={background} alt="background"/> */}
      
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
