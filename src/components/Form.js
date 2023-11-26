import { useState } from "react";
import Button from "./Button";
import { useTodo } from "../contexts/TodoContext";

export default function Form() {
  const { isFakeDark, dispatch } = useTodo();
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    dispatch({ type: "ADD_TASK", payload: name });
    setName("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <Button className="checkbox input-icon" disabled />

      <input
        className={`${isFakeDark ? "input-light" : "input-dark"}`}
        id="description"
        type="text"
        placeholder="Create a new todo..."
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}
