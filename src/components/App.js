import Logo from "./Logo";
import Form from "./Form";
import TodoList from "./TodoList";
import Info from "./Info";
import Footer from "./Footer";
import { useTodo } from "../contexts/TodoContext";

function App() {
  const { isFakeDark } = useTodo();
  return (
    <div className={`${isFakeDark ? "app-light" : "app-dark"}`}>
      <div className={`${isFakeDark ? "main-light" : "main-dark"}`}>
        <Logo />
        <Form />
        <div>
          <TodoList />
          <Info />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
