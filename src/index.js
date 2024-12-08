import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurWork from "./pages/OurWork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/our-work",
    element: <OurWork />,
  },
  {
    path: "/contact",
  },
]);

const RootComponent = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
