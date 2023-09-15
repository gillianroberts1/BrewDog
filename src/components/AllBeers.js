import "./AllBeers.css"


const AllBeers = ({ beers, handleButtonClick }) => {

    

    
    return (
        <>
            {beers && beers.map(beer => (
                <button className="beer" onClick={() => handleButtonClick(beer)}>

                    

                    <p>{beer.name} </p>
                   

                    <p>{beer.abv}</p>
                    
                </button>
                    
            ))
            }

        </>


    )


}


export default AllBeers