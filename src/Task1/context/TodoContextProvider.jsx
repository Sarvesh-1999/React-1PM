import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState("");
  
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  console.log(allTodos);

  const handleTodo = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <TodoContext.Provider value={{ todo, handleTodo, handleSubmit }}>
      {props.children}
    </TodoContext.Provider>
  );
};
