import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import TodoInput from "../components/TodoInput";
import { getTodos } from "../redux/todoThunk";
import TodoCalendar from "../components/TodoCalendar";
import TodoItem from "../components/TodoItem";

const MainPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.value);
  const selectedDate = useSelector((state: RootState) => state.date.date);

  const filteredTodos = todos
    .filter((todo) => todo.title.split("~")[1] === selectedDate)
    .sort((todo) => +todo.isCompleted - +!todo.isCompleted);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="main-page">
      <div className="calendar-wrapper">
        <TodoCalendar />
      </div>
      <div className="todos-wrapper">
        <div className="todos">
          <TodoInput />
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              isCompleted={todo.isCompleted}
              date={todo.title.split("~")[1]}
              title={todo.title.split("~")[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
