import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        // {
        //   path: 'about',
        //   element: <About></About>
        // },
        // {
        //   path:'login',
        //   element:<Login></Login>
        // },
        // {
        //   path:'signup',
        //   element:<SignUp></SignUp>
        // },
        // {
        //   path:'checkout/:id',
        //   element:<CheckOut></CheckOut>,
        //   loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        // },
        // {
        //   path:'bookings',
        //   element: <PrivateRote><Bookings></Bookings></PrivateRote>
        // }
      ]
    },
  ]);
  export default router