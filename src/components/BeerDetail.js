const BeerDetail = ({beer, newFavourites}) => {

    const handleButtonClick = () => {
        newFavourites(beer)

        // const altTag = `${beer}`
        

        
    }


    return(
        <div className="beer">
        <img 
            src={beer.image_url}
            alt={beer.name}
            />

        <div className="beer-detail">
            <p>{beer.name}</p>
            <p>{beer.description}</p>
            

            <button onClick={handleButtonClick}>Add to Favourites</button>




        </div>
        </div>
    )

}
export default BeerDetail