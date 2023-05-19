import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import ToyCard from "../pages/Home/Tabs/ToyCard";



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
          path:'toys',
          element:<ToyCard></ToyCard>,
          loader: ()=> fetch('http://localhost:5000/toys')
      
        },
        {
          path:'addtoys',
          element:<AddToy></AddToy>,
        //   loader:()=>fetch('http://localhost:5000/alltoys')
        },
       
        
        
      ]
    },
  ]);
  export default router