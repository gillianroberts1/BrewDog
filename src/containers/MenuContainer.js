import { useEffect, useState } from "react"
// import Menu from "../components/Menu"
import TitleBar from "../components/TitleBar"
import BeerDetail from "../components/BeerDetail"
import FavouriteBeers from "../components/FavouriteBeers"
import AllBeers from "../components/AllBeers"

const MenuContainer = () => {
    const [beers, setBeers] =useState([])
    const [selectedBeer, setSelectedBeer] = useState([])
    const [favouriteBeers, setFavouriteBeers] = useState([])

    useEffect(() => {
        getBeers()
    },[])
    


const getBeers = function(){
    fetch("https://api.punkapi.com/v2/beers")
    .then (res => res.json())
    .then(beers => setBeers(beers))
    .catch(err => console.error(`Loading menu error: ${err}`))

    
}

const onBeerSelected = (beer) => {
    setSelectedBeer(beer)
}


const favouriteSelected = (beer) => {
    const newFavourites = [...favouriteBeers]
    newFavourites.push(beer)
    setFavouriteBeers(newFavourites)
}



    return(
        <>
        <h1>Menu Container</h1>
        <TitleBar beers={beers} onBeerSelected={onBeerSelected}/>
        {selectedBeer.length ? <AllBeers beers={selectedBeer} /> : <BeerDetail beer={selectedBeer} newFavourites={favouriteSelected}/>}
        
        <FavouriteBeers beers={favouriteBeers}/>
        


        </>
        
    )
}


export default MenuContainer