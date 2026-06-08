const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Henry" },
  { id: 3, name: "Clark" },
  { id: 4, name: "Jane" },
  { id: 5, name: "James1" },
  { id: 6, name: "James2" },
  { id: 7, name: "James3" },
  { id: 8, name: "James4" },
  { id: 9, name: "James5" },
  { id: 10, name: "James6" },
];

const UserLists = () => {
  return (
    <div>
      <h1>Learn Lists in React</h1>
      {users.map((employee) => {
        console.log(employee);
        return (
          <div key={employee.id}>
            <h2>{employee.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UserLists;
