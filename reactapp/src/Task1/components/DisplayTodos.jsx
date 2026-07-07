import { TodoContext } from "../context/TodoContextProvider";
import { useContext } from "react";

const DisplayTodos = () => {
  const { allTodos, handleDeleteTodo, handleEditTodo } = useContext(TodoContext);
  console.log("todos are ->", allTodos);

  return (
    <div>
      {allTodos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <section>
          {allTodos.map((ele) => {
            return (
              <div key={ele.id}>
                <h4>{ele.text}</h4>
                <button onClick={() => handleEditTodo(ele.id)}>edit</button>
                <button onClick={() => handleDeleteTodo(ele.id)}>delete</button>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};
export default DisplayTodos;
