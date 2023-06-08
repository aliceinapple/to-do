import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ToDoItem = () => {
  return (
    <div className="todo-item">
      <span>to do task</span>
      <div className="todo-item_btns">
        <Button type="primary" size="small" htmlType="submit">
          <CheckOutlined />
        </Button>
        <Button type="dashed" size="small" htmlType="submit">
          <EditOutlined />
        </Button>
        <Button type="primary" size="small" htmlType="submit" danger>
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ToDoItem;
