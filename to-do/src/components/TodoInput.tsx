import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { createTodo } from "../redux/todoThunk";

const TodoInput = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedDate = useSelector((state: RootState) => state.date.date);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value !== "~" && setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      return;
    }

    dispatch(
      createTodo({
        title: `${value}~${selectedDate}`,
      })
    );
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
      <Button className="add-btn" type="primary" htmlType="submit">
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
