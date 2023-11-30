import ResturantCard from "./ResturantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = () => {
  const [listOfResturants, setlistOfResturant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const[searchText, setSearchText] = useState("");

      useEffect(() => {
         fetchData();
      }, []);

      const fetchData = async () => {
             const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
             );

         const json = await data.json();
           console.log(json);
         setlistOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }; 
       
      const onlineStatus = useOnlineStatus()
      if(onlineStatus === false) return <h1>Looks like you're offline. Please Check Your Internet Connection.</h1>

      if (listOfResturants?.length === 0){
         return <Shimmer/>
      };

      

    return (
       <div className="body bg-blue-300">
          <div className="filter flex">
            <div className="search m-4 p-4 ">
               <input type="text" className="border border-solid border-black rounded-2xl" value={searchText} 
               onChange={(e) => {
                  setSearchText(e.target.value)
               }} />
                  <button className="px-4 py-1 m-4 bg-green-100 rounded-2xl" onClick={() => {
                     const filteredRestaurant = listOfResturants.filter((res) => 
                     res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     )
                     setFilteredRestaurant(filteredRestaurant)
                  }}>
                     search
                  </button>
            </div>
            <div className="search m-4 p-4 flex items-center" >
            <button className="filter px-4 py-1 bg-gray-100 rounded-2xl" onClick={() => {
               const filteredList = listOfResturants.filter(
                  (res) => res.info.avgRating > 4
               );
               console.log(filteredList);
               setFilteredRestaurant(filteredList);
            }}>
               Top Rated Resturants
               </button>
            </div>
            
             
          </div>
          <div className="flex flex-wrap px-4">
            {filteredRestaurant.map((resturant) => (
           <Link 
           key={resturant.info.id} 
           to={"/restaurant/" + resturant.info.id}> <ResturantCard  resData={resturant} />
           </Link>
            ))}
       </div>
       </div>
    )
 };

 export default Body;