import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoCalendar from "../components/TodoCalendar";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const MainPage = () => {
  const todos = useSelector((state: RootState) => state.todos.value);
  return (
    <div className="main-page">
      <div>
        <TodoCalendar />
      </div>
      <div>
        <AddTodo />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
