import { Button, Input } from "antd";
import { useState } from "react";

const AddToDo = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <form className="add-task-input" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="add task"
        value={value}
        onChange={handleChange}
      />
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </form>
  );
};

export default AddToDo;
