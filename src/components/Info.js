
import { useTodo } from "../contexts/TodoContext";
import Button from "./Button";

export default function Info() {
  const { todos, dispatch, status, isFakeDark } = useTodo()
  const numItems = todos.length;
  const numUnCompleted = todos.filter((item) => !item.completed).length;
  const numCompleted = todos.filter((item) => item.completed).length;

  function showOnlyCompleted(params) {
    if (numCompleted === 0) return;
    dispatch({ type: "ONLY_COMPLETED" });
  }
  function showOnlyUnCompleted(params) {
    if (numUnCompleted === 0) return;
    dispatch({ type: "ONLY_UNCOMPLETED" });
  }
  function showAllTodos(params) {
    dispatch({ type: "ALL_TODOS" });
  }
  function clearCompleted(params) {
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  return (
    <div className={`${isFakeDark ? "footer-info-light" : "footer-info-dark"}`}>
      <p style={{ transform: "translateX(1rem)" }}>
        <em>
          {!numItems
            ? "Add items"
            : numUnCompleted === 0
            ? "All tasks completed"
            : ` ${numUnCompleted} items left`}
        </em>
      </p>
      <div className="footer-buttons">
        <Button
          className={`btn ${status === "all" && "active"}`}
          onClick={showAllTodos}
        >
          All
        </Button>

        <Button
          className={`btn ${status === "uncompleted" && "active"}`}
          onClick={showOnlyUnCompleted}
        >
          Active
        </Button>

        <Button
          className={`btn ${status === "completed" && "active"}`}
          onClick={showOnlyCompleted}
        >
          Completed
        </Button>
      </div>
      <div>
        <Button
          className={`btn btn-clear ${status === "clear" && "active"}`}
          onClick={clearCompleted}
        >
          Clear Completed
        </Button>
      </div>
    </div>
  );
}
