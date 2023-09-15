const FavouriteBeers = ({beers}) => {

    

    return(
        <>
        <h1>Favourite Beers</h1>
        {beers && beers.map(beer => <p>{beer.name}</p>)}
        </>
    )
}

export default FavouriteBeers
