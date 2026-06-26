import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />

      {/* Used to render children routes */}
      <Outlet />
    </div>
  );
};

export default Layout;
