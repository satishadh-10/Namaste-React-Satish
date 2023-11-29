import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";


const useRestaurantMenu = (resID) => {
    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resID);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
          };

        return resInfo;

};


 export default useRestaurantMenu;