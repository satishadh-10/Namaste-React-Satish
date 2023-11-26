import ResturantCard from "./ResturantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";





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

      if (listOfResturants?.length === 0){
         return <Shimmer/>
      };

      

    return (
       <div className="body">
          <div className="filter">
            <div className="search">
               <input type="text" className="search-box" value={searchText} 
               onChange={(e) => {
                  setSearchText(e.target.value)
               }} />
                  <button className="search-btn" onClick={() => {
                     const filteredRestaurant = listOfResturants.filter((res) => 
                     res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     )
                     setFilteredRestaurant(filteredRestaurant)
                  }}>
                     search
                  </button>
            </div>
            <button className="filter-btn" onClick={() => {
               const filteredList = listOfResturants.filter(
                  (res) => res.info.avgRating > 4
               );
               console.log(filteredList);
               setFilteredRestaurant(filteredList);
            }}>
               Top Rated Resturants
               </button>
             
          </div>
          <div className="restro-container">
            {filteredRestaurant.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
            ))}
       </div>
       </div>
    )
 };

 export default Body;