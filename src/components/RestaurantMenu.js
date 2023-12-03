
import Shimmer from "./Shimmer";
import {  useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories.js";


const RestaurantMenu = () => {
       
    const { resID } = useParams();
    const resInfo = useRestaurantMenu(resID);
    
    
       if (resInfo === null) return <Shimmer />

     const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    
     const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

     //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

     );

    //console.log(categories);

     
             

    return (
        <div className="menu text-center">
            <h1 className="font-bold text-xl my-6">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((category) => (<RestaurantCategories data={category.card.card} />))}
            
            
        </div>
    );
};

export default RestaurantMenu;