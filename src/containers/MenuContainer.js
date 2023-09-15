import { useEffect, useState } from "react"
// import Menu from "../components/Menu"
import TitleBar from "../components/TitleBar"
import BeerDetail from "../components/BeerDetail"

const MenuContainer = () => {
    const [beers, setBeers] =useState([])
    const [selectedBeer, setSelectedBeer] = useState("")

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






    return(
        <>
        <h1>Menu Container</h1>
        <TitleBar beers={beers} onBeerSelected={onBeerSelected}/>
        {selectedBeer? <BeerDetail beer={selectedBeer}/> : null}
        
        


        </>
        
    )
}


export default MenuContainer