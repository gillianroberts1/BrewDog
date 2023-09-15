const BeerDetail = ({beer, newFavourites}) => {

    const handleButtonClick = () => {
        newFavourites(beer)
        

        
    }


    return(
        <div className="beer-detail">
            <p>{beer.name}</p>
            <p>{beer.description}</p>
            <button onClick={handleButtonClick}>Add to Favourites</button>




        </div>
    )

}
export default BeerDetail