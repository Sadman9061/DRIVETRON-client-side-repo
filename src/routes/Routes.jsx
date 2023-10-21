
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AddProducts from "../pages/AddProducts";
import MyCart from "../pages/MyCart";
import Login from "../pages/auth/Login";
import Details from "../pages/Details";
import Update from "../pages/Update";
import Registration from "../pages/auth/Registration";

import TopPicks from "../components/TopPicks";
import FaqDetails from "../pages/faqDetails";
import BrandDetails from "../pages/BrandDetails";
import PrivateRoute from "../components/PrivateRoute";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        loader:()=> fetch(`https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/user`),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/faq'),
                
                children:[
                    {   path:'/',
                        element:<TopPicks></TopPicks>,
                        loader:()=>fetch('https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/brand'),
                    }
                ]
                
            },
            {
                path:"/faq/:id",
                element: <FaqDetails></FaqDetails>,
                loader:({params})=> fetch(`https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/faq/${params.id}`)   
            },
            {
                path: "/addProducts",
                element:<PrivateRoute> <AddProducts></AddProducts></PrivateRoute>,
            },
            {
                path: "/myCart",
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader:()=> fetch('https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/myCart')
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/registration",
                element:<Registration></Registration>,
            },
            {
                path:"/productDetails/:id",
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=> fetch(`https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/products/${params.id}`)

            },
            {
                path: "/update/:id",
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader:({params})=> fetch(`https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/products/${params.id}`)

            },
            {
                path:"/brand/:id",
                element:<BrandDetails></BrandDetails>,
                loader:()=>fetch('https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/products')
            },
            
        ]

    },
]);
export default router;