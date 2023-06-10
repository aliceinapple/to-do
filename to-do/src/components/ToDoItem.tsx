import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  updateTodoCompletion,
} from "../redux/todoThunk";
import { AppDispatch } from "../redux/store";
import { useState } from "react";

interface TodoItemState {
  todo: { id: number; title: string; isCompleted: boolean };
}

const TodoItem: React.FC<TodoItemState> = ({ todo }) => {
  const dispatch: AppDispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isEdited, setIsEdited] = useState(false);
  const [value, setValue] = useState(todo.title);
  const date = value.split("//")[1];

  const editHandle = () => {
    setIsEdited(!isEdited);
    isEdited && updateHandle();
  };

  const updateStatusHandle = () => {
    dispatch(updateTodoCompletion(todo.id));
    setIsCompleted(!isCompleted);
  };

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const updateHandle = () => {
    dispatch(updateTodo({ title: `${value}//${date}`, id: todo.id }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`todo-item ${isCompleted && "todo-item_complete"}`}>
      <Input
        type="text"
        value={value.split("//")[0]}
        disabled={!isEdited}
        onChange={handleChange}
      />
      <div className="todo-item-btns">
        <Button
          type="primary"
          size="small"
          htmlType="submit"
          onClick={updateStatusHandle}
        >
          {isCompleted ? <RollbackOutlined /> : <CheckOutlined />}
        </Button>
        <Button
          type="dashed"
          size="small"
          htmlType="submit"
          onClick={editHandle}
        >
          {isEdited ? <CheckOutlined /> : <EditOutlined />}
        </Button>
        <Button
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
