import { CDM_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} = props;
 
    const {
       cloudinaryImageId,
       name,
       cuisines,
       avgRating,
       costForTwo,
    } = resData?.info;
    return(
       <div className="mx-6 my-4 p-2 w-[220px] rounded-xl bg-gray-200 hover:bg-gray-400" >
         <div>
          <img className="res-logo h-32 w-[240px] object-cover rounded-md" alt="res-logo" src={CDM_URL
          +cloudinaryImageId}>   
          </img>
          </div>
          <div>
          <p className="font-bold h-8 py-2 text-lg truncate ">{name}</p>
          </div>
          <p className=" h-7 my-2 flex flex-wrap truncate ">{cuisines.join(",   ")}</p>
          <div className="flex">
          <h4>{avgRating}</h4>
          <h4 className="mx-3">{costForTwo}</h4>
          </div>
          <h4 className="my-4 py-2">{resData.info.sla.deliveryTime}minute</h4>
       </div>
    )
 };


 export default ResturantCard;