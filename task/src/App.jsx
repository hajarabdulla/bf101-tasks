import React, { useState } from "react";
// import Board from "./components/Board";
// import Counter from "./components/Counter";
// import Input from "./components/Input";

const App = () => {
  //   const [tasks, setTasks] = useState([]);

  const [color, setColor] = useState();

  const changeColor = () => {
    setColor("pink");
  };

  //   const myStyle = {
  //     width: "200px",
  //     height: "200px",
  //   };

  return (
    <>
      <div className="box" style={{ backgroundColor: color }}></div>
      <button onClick={changeColor}>Change color</button>
      {/* <div style={myStyle} className={color ? "pink" : "black"}></div> */}
      {/* <div className="box" style={{ backgroundColor: color && "pink" }}></div>
      <button onClick={changeColor}>Change Color</button> */}
      {/* <Counter counter={counter} />
      <Input
        changeCount={changeCount}
        tasks={tasks}
        setTasks={setTasks}
        setCounter={setCounter}
      />
      <Board tasks={tasks} counter={counter} /> */}
    </>
  );
};

export default App;
