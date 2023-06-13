import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  updateTodoCompletion,
} from "../redux/todoThunk";
import { AppDispatch } from "../redux/store";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface TodoItemState {
  id: number;
  isCompleted: boolean;
  date: string;
  title: string;
}

const TodoItem: React.FC<TodoItemState> = ({
  id,
  isCompleted,
  date,
  title,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const [value, setValue] = useState(title);
  const [isCompletedTodo, setIsCompletedTodo] = useState(isCompleted);

  const editHandle = () => {
    setIsEdited(!isEdited);
    isEdited && updateHandle();
  };

  const updateStatusHandle = () => {
    setIsCompletedTodo(!isCompletedTodo);
    dispatch(updateTodoCompletion(id));
  };

  const deleteHandle = () => {
    dispatch(deleteTodo(id));
  };

  const updateHandle = () => {
    dispatch(updateTodo({ title: `${value}~${date}`, id: id }));
  };

  return (
    <div className={`todo-item ${isCompletedTodo && "todo-item_completed"}`}>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value.replace(/~/g, ""))}
        autoSize={{ maxRows: 3 }}
        readOnly={!isEdited}
      />
      <div className="todo-item-btns">
        {!isCompletedTodo && (
          <Button
            type={isEdited ? "dashed" : "primary"}
            size="small"
            htmlType="submit"
            onClick={editHandle}
          >
            <EditOutlined />
          </Button>
        )}

        <Button
          type="default"
          size="small"
          htmlType="submit"
          onClick={updateStatusHandle}
          ghost
        >
          {isCompletedTodo ? <RollbackOutlined /> : <CheckOutlined />}
        </Button>
        <Button
          className="custom-button"
          type="primary"
          size="small"
          htmlType="submit"
          onClick={deleteHandle}
          danger
        >
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
