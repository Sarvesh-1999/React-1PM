import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AllEmployees from "../pages/AllEmployees";
import CreateEmployee from "../pages/CreateEmployee";
import EditEmployee from "../pages/EditEmployee";
import NotFound from "../pages/NotFound";
import SignupPage from "../pages/SignupPage"
import LoginPage from "../pages/LoginPage"


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/create",
        element: <CreateEmployee />,
      },
      {
        path: "/all",
        element: <AllEmployees />,
      },
      {
        path: "/edit",
        element: <EditEmployee />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
