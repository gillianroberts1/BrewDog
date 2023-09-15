import { useEffect, useState } from "react"
// import Menu from "../components/Menu"
import TitleBar from "../components/TitleBar"
import BeerDetail from "../components/BeerDetail"
import FavouriteBeers from "../components/FavouriteBeers"
import AllBeers from "../components/AllBeers"
import SearchBar from "../components/SearchBar"

const MenuContainer = () => {
    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState([])
    const [favouriteBeers, setFavouriteBeers] = useState([])



    useEffect(() => {
        getBeers()
    }, [])



    const getBeers = function () {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(beers => setBeers(beers))
            .catch(err => console.error(`Loading menu error: ${err}`))


    }

    const onBeerSelected = (beer) => {
        setSelectedBeer(beer)
    }

    const handleBeerClick = (beer) => {
        setSelectedBeer(beer)
    }





    const favouriteSelected = (beer) => {
        const newFavourites = [...favouriteBeers]
        newFavourites.push(beer)
        setFavouriteBeers(newFavourites)
    }

    const handleSearch = (input) => {
        const results = beers.filter((beer) => {
            const lowerInput = input.toLowerCase()

            return (
                beer.name.toLowerCase().includes(lowerInput) ||
                beer.abv.toString().includes(lowerInput) ||
                beer.description.toLowerCase().includes(lowerInput) ||
                beer.first_brewed.includes(lowerInput)
                
                )
    })

        setSelectedBeer(results)

}


return (
    <>
        <div className="search-bar-container">
            <SearchBar handleSearch={handleSearch} />
            <div>Search by name, year, abv, description</div>
        </div>


        <TitleBar beers={beers} onBeerSelected={onBeerSelected} />
        {selectedBeer.length ? <AllBeers beers={selectedBeer} handleButtonClick={handleBeerClick} /> : <BeerDetail beer={selectedBeer} newFavourites={favouriteSelected} />}

        <FavouriteBeers beers={favouriteBeers} />



    </>

)
}


export default MenuContainer