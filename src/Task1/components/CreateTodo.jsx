import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const CreateTodo = () => {
  const { todo, handleTodo, handleSubmit , editId } = useContext(TodoContext);

  return (
    <div>
      <h1>Create a Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo..."
          required
          value={todo}
          onChange={handleTodo}
        />
        <br />
        <button>
          {editId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};
export default CreateTodo;
