import AddToDo from "../components/AddToDo";
import ToDoCalendar from "../components/ToDoCalendar";
import ToDoItem from "../components/ToDoItem";

const MainPage = () => {
  return (
    <div className="main-page">
      <div>
        <ToDoCalendar />
      </div>
      <div>
        <AddToDo />
        <ToDoItem />
      </div>
    </div>
  );
};

export default MainPage;
