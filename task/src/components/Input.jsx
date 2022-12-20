import React, { useState } from "react";

const Input = ({ changeCount, tasks, setTasks, setCounter }) => {
  const [value, setValue] = useState("");

  const onChangeEvent = (e) => {
    setValue(e.target.value);
    changeCount();
  };

  const addToBoard = (e) => {
    e.preventDefault();

    setTasks([...tasks, value]);
    setValue("");
    setCounter(0);
  };

  return (
    <form onSubmit={addToBoard}>
      <input type="text" value={value} onChange={(e) => onChangeEvent(e)} />
    </form>
  );
};

export default Input;
