import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

interface ExampleTodosState {
  title: string;
}

const ExampleTodos: React.FC<ExampleTodosState> = ({ title }) => {
  return (
    <div className={"todo-item"}>
      <TextArea value={title} autoSize={{ maxRows: 3 }} readOnly />
      <div className="todo-item-btns">
        <Button type={"primary"} size="small" htmlType="submit">
          <EditOutlined />
        </Button>

        <Button type="default" size="small" htmlType="submit" ghost>
          <CheckOutlined />
        </Button>
        <Button
          className="custom-button"
          type="primary"
          size="small"
          htmlType="submit"
          danger
        >
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ExampleTodos;
