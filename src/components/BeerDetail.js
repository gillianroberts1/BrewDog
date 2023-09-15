const BeerDetail = ({beer, newFavourites}) => {

    const handleButtonClick = () => {
        newFavourites(beer)
    }

    return(
        <div className="beer-detail">
            <li>chosen beer is {beer.name}</li>
            <li>description {beer.description}</li>
            <button onClick={handleButtonClick}>Add to Favourites</button>




        </div>
    )

}
export default BeerDetail