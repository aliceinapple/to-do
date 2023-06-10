import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoCalendar from "../components/TodoCalendar";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const MainPage = () => {
  const todos = useSelector((state: RootState) => state.todos.value);
  const selectedDate = useSelector((state: RootState) => state.date.date);

  const filteredTodos = todos.filter((todo) => {
    return todo.title.split("//")[1] === selectedDate;
  });

  return (
    <div className="main-page">
      <div>
        <TodoCalendar />
      </div>
      <div>
        <AddTodo />
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
