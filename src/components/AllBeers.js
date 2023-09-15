const AllBeers = ({ beers }) => {

    return (
        <>
            {beers && beers.map(beer => (
                <div className="beer">

                    <p>{beer.name}</p>
                    <p>{beer.abv}</p>
                </div>
            ))
            }

        </>


    )


}


export default AllBeers