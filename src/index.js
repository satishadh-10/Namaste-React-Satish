import React, {Suspense, lazy, useEffect, useState} from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
   const[userName, setUserName] = useState();
   useEffect(() => {
      const data = {
         name: "Satish Adhikari"
      }
      setUserName(data.name)
   }, [])
   return(
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
         
         <Header />
         
         <Outlet />
         
      </div>
      </UserContext.Provider>
      </Provider>
   )
}

const AppRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      children: [
         {
            path: "/",
            element: <Body />
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/grocery",
            element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
         },
         {
            path: "/restaurant/:resID",
            element: <RestaurantMenu />,
         }
      ],
      errorElement: <Error />,
   },
   
])

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={AppRouter}/>);