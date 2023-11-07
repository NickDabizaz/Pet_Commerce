import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Community from "./pages/Community.jsx";
import {
  AlwaysErrorPage,
  ContactUsPage,
  ErrorElement,
  MainLayout,
} from "./Components.jsx";
import CreateStore from "./pages/CreateStore.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <errorElement />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/community", element: <Community /> },
      { path: "/create-store", element: <CreateStore /> },
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
