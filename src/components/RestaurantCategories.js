import ItemsList from "./ItemsList";

const RestaurantCategories = ({data}) => {
    //console.log(data);
    return (
        <div className="bg-gray-50 shadow-lg w-6/12 mx-auto my-4 p-4">
            <div className=" flex justify-between">
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔻</span>
            </div>
            <ItemsList items={data.itemCards} />
        </div>
    )
    
};

export default RestaurantCategories;