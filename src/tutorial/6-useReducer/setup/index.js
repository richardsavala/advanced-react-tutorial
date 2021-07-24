import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const name = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit}>
        <div className="">
          <input type="text" value={name} onChange={(e) => e.target.value} />
        </div>
      </form>
    </>
  );
};

export default Index;
