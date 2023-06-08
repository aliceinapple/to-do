import { Calendar } from "antd";
import { CalendarMode } from "antd/es/calendar/generateCalendar";
import { Dayjs } from "dayjs";

const ToDoCalendar = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return <Calendar fullscreen={false} onPanelChange={onPanelChange} />;
};

export default ToDoCalendar;
