import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import MyBookings from "./pages/MyBookings";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { index: true, element: <Home /> },
    { path: "restaurant/:id", element: <Details /> },
    { path: "book/:id", element: <Booking /> },
    { path: "confirm", element: <Confirmation /> },
    { path: "my-bookings", element: <MyBookings /> },
  ]},
  { path: "*", element: <NotFound /> }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
