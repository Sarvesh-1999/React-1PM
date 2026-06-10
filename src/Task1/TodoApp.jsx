import CreateTodo from "./components/CreateTodo";
import DisplayTodos from "./components/DisplayTodos";

const TodoApp = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <hr />

      <CreateTodo />
      <hr />

      <DisplayTodos />
    </div>
  );
};
export default TodoApp;
