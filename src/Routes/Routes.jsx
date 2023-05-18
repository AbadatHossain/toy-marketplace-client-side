import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
       
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'posttoy',
          element:<AddToy></AddToy>
        },
        
      ]
    },
  ]);
  export default router