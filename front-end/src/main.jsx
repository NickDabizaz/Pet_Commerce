import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {
  AdminDashboard,
  ManageUser,
  ManageCommunity,
} from "./pages/AdminDashboard.jsx";
import { Community } from "./pages/Community.jsx";
import { AlwaysErrorPage, ContactUsPage, MainLayout } from "./Components.jsx";
import CreateStore from "./pages/CreateStore.jsx";
import StoreDetail from "./pages/StoreDetail.jsx";
import Profile from "./pages/Profile.jsx";
import FormAddProduct from "./pages/FormAddProduct.jsx";
import Search from "./pages/Search.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import DetailPost from "./pages/DetailPost.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import FAQ from "./pages/FAQ.jsx";
import History from "./pages/History.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DetailTransaction from "./pages/DetailTransaction.jsx";
import { StoreReport } from "./pages/StoreReport.jsx";
import ManageStore from "./pages/ManageStore.jsx";
import ManageDetailStore from "./pages/ManageDetailStore.jsx";
import ManageDetailCommunity from "./pages/ManageDetailCommunity.jsx";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        children: [
          { index: true, element: <Homepage /> },
          {
            path: "/products",
            children: [
              { index: true, element: <Search /> },
              { path: ":product_id", element: <ProductDetail /> },
            ],
          },
        ],
      },
      { path: "/login", element: <Login /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      {
        path: "/admin",
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "/admin/manage-users", element: <ManageUser /> },
          {
            path: "/admin/manage-community",
            children: [
              { index: true, element: <ManageCommunity /> },
              { path: ":post_id", element: <ManageDetailCommunity /> },
            ],
          },
          {
            path: "/admin/manage-store",
            children: [
              { index: true, element: <ManageStore /> },
              { path: ":store_id", element: <ManageDetailStore /> },
            ],
          },
        ],
      },
      {
        path: "/community",
        children: [{ index: true, element: <Community /> }],
      },
      {
        path: "/post",
        children: [
          { index: true, element: <Community /> },
          { path: ":post_id", element: <DetailPost /> },
        ],
      },
      { path: "/create-store", element: <CreateStore /> },
      {
        path: "/store",
        children: [
          {
            path: ":store_id",
            element: <StoreDetail />,
          },
          {
            path: ":store_id/form-add-product",
            element: <FormAddProduct />,
          },
          {
            path: "report/:store_id",
            element: <StoreReport />,
          },
        ],
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/history",
        children: [
          {
            index: true,
            element: <History />,
          },
          {
            path: ":order_id",
            element: <DetailTransaction />,
          },
        ],
      },
      {
        path: "/error",
        element: <AlwaysErrorPage />,
        errorElement: <div>Ini Error Element</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
