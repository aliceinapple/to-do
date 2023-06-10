import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { createTodo, getTodos } from "../redux/todoThunk";

const AddTodo = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedDate = useSelector((state:RootState) => state.date.date);
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
        title: `${value}//${selectedDate}`,
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
