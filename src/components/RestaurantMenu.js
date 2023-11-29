
import Shimmer from "./Shimmer";
import {  useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
       
    const { resID } = useParams();
    const resInfo = useRestaurantMenu(resID);
    
      
       if (resInfo === null) return <Shimmer />

     const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;
    
     const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

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