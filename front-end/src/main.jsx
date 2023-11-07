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
  AboutPage,
  AlwaysErrorPage,
  ContactUsPage,
  ErrorElement,
  HomePage,
  MainLayout,
  NestedPage,
  NestedPage0,
  NestedPage1,
  NestedPage2,
} from "./Components.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <errorElement />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactUsPage /> },
      {
        path: "/nested",
        // element: <NestedPage />,
        children: [
          { path: "page1", element: <NestedPage1 /> },
          { path: "page2", element: <NestedPage2 /> },
          { index: true, element: <NestedPage0 /> },
        ],
      },
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
