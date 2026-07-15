import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <h1 className="p-5 text-4xl font-bold text-center mt-20">
        Employee Management App
      </h1>

      <nav className="mt-10 text-center font-semibold">
        <Link
          to={"/create"}
          className="mx-5 bg-zinc-900 text-zinc-50 px-5 py-2 rounded cursor-pointer"
        >
          Create Employee
        </Link>
        <Link
          to={"/all"}
          className="mx-5 bg-zinc-900 text-zinc-50 px-5 py-2 rounded cursor-pointer"
        >
          All Employees
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
