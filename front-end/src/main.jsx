import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import { Community, Detail } from "./pages/Community.jsx";
import {
  AlwaysErrorPage,
  ContactUsPage,
  ErrorElement,
  MainLayout,
} from "./Components.jsx";
import CreateStore from "./pages/CreateStore.jsx";
import StoreDetail from "./pages/StoreDetail.jsx";
import Profile from "./pages/Profile.jsx";
import FormAddProduct from "./pages/FormAddProduct.jsx";

const router = createBrowserRouter([
  {
    errorElement: <errorElement />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "/admin", element: <AdminDashboard /> },
      {
        path: "/community",
        children: [
          { index: true, element: <Community /> },
          { path: ":post_id", element: <Detail /> },
        ],
      },
      { path: "/create-store", element: <CreateStore /> },
      {
        path: "/store",
        children:[
          {
            path:":store_id",
            element: <StoreDetail />
          },
          {
            path: ":store_id/form-add-product",
            element : <FormAddProduct />
          }
        ]
      },
      // 
      // {
      //   path: "/nested",
      //   // element: <NestedPage />,
      //   children: [
      //     { path: "page1", element: <NestedPage1 /> },
      //     { path: "page2", element: <NestedPage2 /> },
      //     { index: true, element: <NestedPage0 /> },
      //   ],
      // },
      {
        path: "/error",
        element: <AlwaysErrorPage />,
        errorElement: <ErrorElement />,
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
