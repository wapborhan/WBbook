import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./home/HomePage.jsx";
import Order from "./home/order/Order.jsx";
import Profile from "./home/profile/Profile.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Order />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
