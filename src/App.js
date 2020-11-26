import React, { useReducer, useState, useEffect, useCallback } from "react";
import "./styles.css";
function App() {
  let [number, setNumber] = useState(0);
  const getItems = useCallback(
    (number) => {
      console.log("callback");
      return [number, number + 1, number + 2];
    },
    [number]
  );
  function handleChange(evt) {
    setNumber(Number(evt.target.value));
  }
  const toggle = () => {
    console.log("toggled");
  };
  return (
    <>
      <input onChange={handleChange} />
      {getItems(number).map((ele) => {
        return <p>{ele}</p>;
      })}
      <button onClick={toggle}>toggle</button>
    </>
  );
}
export default App;
