import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { createTodo, getTodos } from "../redux/todoThunk";

const AddTodo = () => {
  const dispatch: AppDispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      return;
    }

    dispatch(
      createTodo({
        title: value,
      })
    );
    setValue("");
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

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

export default AddTodo;
