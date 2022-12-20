import React from "react";
import uuid from "react-uuid";

const Board = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={uuid()}>{task}</li>
      ))}
    </ul>
  );
};

export default Board;
