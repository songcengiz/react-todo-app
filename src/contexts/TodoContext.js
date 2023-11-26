import { createContext, useContext, useReducer, useState } from "react";
const TodoContext = createContext();
const initialState = {
  todos: [
    { id: 1, description: "Read 1 hour", completed: false },
    { id: 2, description: "Jog around the park 3x", completed: false },
    { id: 3, description: "10 minutes meditation", completed: true },
  ],
  status: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), description: action.payload, completed: false },
        ],
      };
    case "DELETE_TASK":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((item) => item.completed === false),
        status: "clear",
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    case "ALL_TODOS":
      return { ...state, status: "all" };

    case "ONLY_COMPLETED":
      return { ...state, status: "completed" };
    case "ONLY_UNCOMPLETED":
      return { ...state, status: "uncompleted" };
    default:
      throw new Error("Unknown action type!");
  }
}

function TodoProvider({ children }) {
  const [{ todos, status }, dispatch] = useReducer(reducer, initialState);
  const [isFakeDark, setIsFakeDark] = useState(false);
  return (
    <TodoContext.Provider
      value={{ todos, isFakeDark, setIsFakeDark, dispatch, status }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { TodoProvider, useTodo };
