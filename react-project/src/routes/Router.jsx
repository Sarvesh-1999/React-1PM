import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AllEmployees from "../pages/AllEmployees";
import CreateEmployee from "../pages/CreateEmployee";
import EditEmployee from "../pages/EditEmployee";
import NotFound from "../pages/NotFound";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
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
        element: (
          <ProtectedRoute>
            <CreateEmployee />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all",
        element: (
          <ProtectedRoute>
            <AllEmployees />
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit",
        element: (
          <ProtectedRoute>
            <EditEmployee />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
