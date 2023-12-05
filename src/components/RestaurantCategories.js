import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategories = ({data, showItems, setShowIndex}) => {
    //console.log(data);
    // const[showItems, setShowItems, setShowIndex] = useState(false)
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className="bg-gray-50 shadow-lg w-6/12 mx-auto my-4 p-4">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔻</span>
            </div>
            {showItems && <ItemsList items={data.itemCards} />}
        </div>
    )
    
};

export default RestaurantCategories;