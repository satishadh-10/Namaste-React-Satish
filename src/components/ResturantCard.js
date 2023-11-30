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
       <div className="m-4 p-4 w-[230px] rounded-xl items-center bg-gray-200 hover:bg-gray-400 hover:w-[235px]" >
          <img className="res-logo h-40 w-60  rounded-md" alt="res-logo" src={CDM_URL
          +cloudinaryImageId}>   
          </img>
          <h3 className="font-bold py-2 text-lg">{name}</h3>
          <h4 className=" my-2 flex flex-wrap">{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{resData.info.sla.deliveryTime}minute</h4>
       </div>
    )
 }

 export default ResturantCard;