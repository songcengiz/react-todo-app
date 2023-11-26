import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { status, isFakeDark, todos } = useTodo();
  let newTodos = todos;

  if (status === "all") newTodos = todos;
  if (status === "completed") newTodos = todos.filter((item) => item.completed);
  if (status === "uncompleted")
    newTodos = todos.filter((item) => !item.completed);

  return (
    <div className="list">
      <ul className={`${isFakeDark ? "light-list" : "dark-list"}`}>
        {newTodos?.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
