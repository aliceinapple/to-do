import { Calendar } from "antd";
import { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../redux/dateSlice";
import { RootState } from "../redux/store";

const TodoCalendar = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.value);
  const datesArr = [...new Set(todos.map((item) => item.title.split("~")[1]))];

  const onSelect = (value: Dayjs) => {
    dispatch(setDate(value.format("YYYY-MM-DD")));
  };

  function dateCellRender(date: Dayjs) {
    if (datesArr.some((item) => date.isSame(item, "day"))) {
      return <div className="highlighted-cell"></div>;
    }
    return null;
  }

  return (
    <div className="calendar">
      <Calendar
        fullscreen={false}
        onSelect={onSelect}
        cellRender={dateCellRender}
      />
    </div>
  );
};

export default TodoCalendar;
