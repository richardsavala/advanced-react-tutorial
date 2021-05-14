import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello ppl";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
