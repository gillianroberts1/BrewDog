import { useEffect, useState } from "react"

const MenuContainer = () => {
    const [menu, setMenu] =useState([])

    useEffect(() => {
        getMenu()
    },[])
    


const getMenu = function(){
    fetch("https://api.punkapi.com/v2/beers")
    .then (res => res.json())
    .then(menu => setMenu(menu))

    
}






    return(
        <h1>Menu Container</h1>
        
    )
}


export default MenuContainer