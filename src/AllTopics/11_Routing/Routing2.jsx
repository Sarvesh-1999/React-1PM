import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LearnPage from "./pages/LearnPage";
import ReferencesPage from "./pages/ReferencesPage";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/learn",
        element: <LearnPage />,
      },
      {
        path: "/reference/react",
        element: <ReferencesPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

const Routing2 = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default Routing2;
