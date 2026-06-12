import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editId, setEditId] = useState(null);

  const handleTodo = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const todos = [...allTodos];
      const updatedTodos = todos.map((ele) => {
        if (ele.id === editId) {
          return { ...ele, text: todo };
        } else {
          return ele;
        }
      });

      setAllTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodo("");
      setEditId(null);
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };

    console.log("todo created", newTodo); // {id: 1781081607532, text: 'React'}
    setAllTodos((prev) => [...prev, newTodo]);

    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    //clearing input field
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    const todos = [...allTodos];
    const filteredTodos = todos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const handleEditTodo = (id) => {
    const todos = [...allTodos];
    const todoToEdit = todos.find((ele) => ele.id === id);
    setEditId(id);
    setTodo(todoToEdit.text);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        handleTodo,
        handleSubmit,
        allTodos,
        handleDeleteTodo,
        handleEditTodo,
        editId,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
