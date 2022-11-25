import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import ReportedProducts from "../../Pages/DashBoard/ReportedProducts/ReportedProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'categories/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
        element: <Products></Products>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: '/dashboard/myOrders',
        element: <MyOrders></MyOrders>
      },
      {
        path: '/dashboard/myProducts',
        element: <MyProducts></MyProducts>
      },
      {
        path: '/dashboard/addProducts', 
        element: <AddProduct></AddProduct>
      },
      {
        path: '/dashboard/myBuyer', 
        element: <MyBuyers></MyBuyers>
      },
      {
        path: '/dashboard/allSeller', 
        element: <AllSellers></AllSellers>
      },
      {
        path: '/dashboard/allBuyer', 
        element: <AllBuyers></AllBuyers>
      },
      {
        path: '/dashboard/reportedProducts', 
        element: <ReportedProducts></ReportedProducts>
      },
    ]
  },
  {
    path: '*',
    element: <div>Page Not Found</div>
  }
]);