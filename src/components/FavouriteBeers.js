const FavouriteBeers = ({beers}) => {

    // const favBeers = beers.map((beer) =>{
    //     return <h1>{beer.name}</h1>
    // })

    return(
        <>
        <h1>Favourite Beers</h1>
        {beers && beers.map(beer => <p>{beer.name}</p>)}
        </>
    )
}

export default FavouriteBeers
