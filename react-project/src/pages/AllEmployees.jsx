import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LIMIT = 5;

const AllEmployees = () => {
  const [employeesData, setEmployeesData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getAllEmployees(params) {
      try {
        let resp = await axios.get(
          `http://localhost:5000/employees?_per_page=${LIMIT}&_page=${page}`,
        );
        console.log(resp.data);
        setEmployeesData(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllEmployees();
  }, [page]);

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      alert("Employee Deleted ✅");
    } catch (error) {
      console.log(error);
      alert("Unable to delete ❌");
    }
  };

  return (
    <article className="h-screen w-full bg-zinc-100 px-20">
      <h1 className="py-5 font-bold text-xl">All Employees</h1>
      <table className="shadow-lg rounded mx-auto mt-10">
        <thead className="bg-zinc-950 text-zinc-100">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">FIRSTNAME</th>
            <th className="p-2">LASTNAME</th>
            <th className="p-2">EMAIL</th>
            <th className="p-2">AGE</th>
            <th className="p-2">DESGINATION</th>
            <th className="p-2">DOJ</th>
            <th className="p-2">ACTIONS</th>
          </tr>
        </thead>

        <tbody className="bg-zinc-50">
          {employeesData?.data.length === 0 ? (
            <tr>
              <td colSpan={8}>No Employees</td>
            </tr>
          ) : (
            employeesData?.data.map((emp) => {
              let { id, firstname, lastname, age, doj, desgination, email } =
                emp;
              return (
                <tr key={id} className="hover:bg-zinc-200 cursor-pointer">
                  <td className="py-2 px-5 ">{id}</td>
                  <td className="py-2 px-5 ">{firstname}</td>
                  <td className="py-2 px-5 ">{lastname}</td>
                  <td className="py-2 px-5 ">{email}</td>
                  <td className="py-2 px-5 ">{age}</td>
                  <td className="py-2 px-5 ">{desgination}</td>
                  <td className="py-2 px-5 ">{doj}</td>
                  <td className="py-2 px-5 ">
                    <Link
                      to={`/edit/${id}`}
                      className="shadow mx-4 border border-zinc-700 px-5 py-1 rounded cursor-pointer"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteEmployee(id)}
                      className="shadow mx-4 border border-zinc-700 px-5 py-1 rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <div className="flex justify-around mt-10">
        <button
          className="border px-2"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={employeesData?.prev ? false : true}
        >
          Prev
        </button>

        <p>
          {page} of {employeesData?.pages}
        </p>

        <button
          className="border px-2"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={employeesData?.next ? false : true}
        >
          Next
        </button>
      </div>
    </article>
  );
};

export default AllEmployees;
