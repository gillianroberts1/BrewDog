const TitleBar = ({beers, onBeerSelected}) => {     

        const menuOptions = beers.map((beer, index) => {
            return <option value={index}>{beer.name}</option>

            })

        const handleSelectChange = (event) => {
            if (event.target.value === "all"){
                onBeerSelected(beers)
            } else{
            const chosenBeer = beers[event.target.value]
            onBeerSelected(chosenBeer)

            }
            
            
        }

    
    return(
        <div>
            <h1>BrewDog Menu</h1>
            <select defaultValue="" onChange={handleSelectChange}>
            <option value="" selected>Select option</option>
            {menuOptions}
            <option value="all" >show all</option>

            </select>
            




        </div>
    )
}
    
export default TitleBar;