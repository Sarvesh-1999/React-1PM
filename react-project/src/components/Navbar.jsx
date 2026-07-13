import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-zinc-800 text-zinc-100 flex items-center justify-between px-20 py-5">
      
      <div className="text-2xl font-extrabold">CRUD-APP</div>

      <nav className="flex gap-5 font-semibold">
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
      </nav>
    </header>
  );
};

export default Navbar;
