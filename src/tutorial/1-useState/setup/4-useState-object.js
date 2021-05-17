import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "rick",
    age: "25",
    message: "rick's message",
  });

  const [name, setName] = useState("rick");
  const [age, setAge] = useState("25");
  const [message, setMessage] = useState("rick's message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage("hello world");
  };

  return (
    <>
      <h3>name: {name}</h3>
      <h3>age: {age}</h3>
      <h3>message: {message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
