import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";



const RestaurantMenu = () => {
       
    const [ resInfo, setResInfo ] = useState(null)
    const { resID } = useParams()

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resID);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
      
       if (resInfo === null) return <Shimmer />

     const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;
    
     const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

     console.log(itemCards);
             

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwo}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li key={items.card.info.id}>
                       <h3>{items.card.info.name}</h3>  -   {" Rs."}{items.card.info.price /100 || items.card.info.defaultPrice /100}
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;