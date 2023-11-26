import { useTodo } from "../contexts/TodoContext";
import Button from "./Button";

export default function TodoItem({ item }) {
  const { isFakeDark, dispatch } = useTodo();
  return (
    <li
      style={{
        borderBottomColor: `${
          !isFakeDark ? "hsl(233, 14%, 35%)" : "hsl(233, 11%, 84%)"
        }`,
      }}
    >
      <Button
        className={`checkbox ${item.completed ? "checked" : ""}`}
        onClick={() => dispatch({ type: "TOGGLE_TASK", payload: item.id })}
      >
        {item.completed && (
          <label>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          </label>
        )}
      </Button>
      <span
        style={
          item.completed
            ? {
                textDecoration: "line-through",
                color: `${
                  !isFakeDark ? "hsl(233, 14%, 35%)" : "hsl(236, 9%, 61%)"
                }`,
              }
            : {}
        }
      >
        {item.description}
      </span>
      <button
        className="btn-delete"
        onClick={() => dispatch({ type: "DELETE_TASK", payload: item.id })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
}
