import { useDispatch } from "react-redux";
import { CDM_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemsList = ({items}) => {
    //console.log(items);
    const dispatch = useDispatch()
    const handleClick = (item) => {
        dispatch(addItems(item))
    }
    return (
        <div>
            {items.map((item) => ( 
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                <div className="py-2">
                   <span className="font-bold">{item.card.info.name}</span>
                   <span className="font-bold text-sm"> - रु {item.card.info.price 
                   ? item.card.info.price / 100 
                   : item.card.info.defaultPrice / 100}
                   </span>
                   </div>
                   <p className="text-xs">{item.card.info.description}</p>
                </div>
                
                <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-1 mx-[38px] my-[66px] rounded-md bg-white shadow-gray-600 shadow-lg font-bold text-green-700 " onClick={() => handleClick(item)}>Add+</button>
                    </div>
                     <div >
                <img src={CDM_URL + item.card.info.imageId } className="w-full rounded-lg h-20 object-cover"/>
                </div>
                </div>
                
            </div> 
            ))}
        </div>
    )
};

export default ItemsList;