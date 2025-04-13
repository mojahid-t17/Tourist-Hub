import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Layouts/Root";
import AddTouristSpot from "../Pages/AddTouristSpot";
import AllSpots from "../Pages/AllSpots";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import MYList from "../Pages/MYList";
import Register from "../Pages/Register";
import SpotDetails from "../Pages/SpotDetails";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/home",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/addTouristSpot",
          element:<PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
        },
       {
        path: "/spotDetails/:id",
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://touris-hub-server.vercel.app/touristSpots/${params.id}`)
       },
       {
        path:"/allTouristSpots/:countryName",
        element:<AllSpots></AllSpots>,
        loader:()=>fetch('https://touris-hub-server.vercel.app/touristSpots')
       },
       {
        path:'/myList/:email',
        element:<PrivateRoute><MYList></MYList></PrivateRoute>,
        loader:({params})=>fetch(`https://touris-hub-server.vercel.app/myList/${params.email}`)
       }
      ]
    },
  ]);

export default Routes;