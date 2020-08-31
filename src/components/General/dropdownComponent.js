import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
// import faqs from "../faqs";

const DropdownComponent = () => {
  const faqs = [
    { name: "zeeshan" },
    { name: "sobia" },
    { name: "gurya" },
    { name: "kiran" },
    { name: "razo" },
  ];
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSeatch] = useState("");
  const onTextChange = (e) => {
    setSeatch(e.target.value);
    if (e.target.value !== "") {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  return (
    <Form.Group controlId="search">
      <Form.Control
        onChange={onTextChange}
        value={search}
        type="text"
        placeholder="Search"
      />
      <FaSearch />
      {display && (
        <div className="autoContainer">
          {faqs.map((result, index) => {
            return (
              <a key={index} href="#">
                {result.name}
              </a>
            );
          })}
        </div>
      )}
    </Form.Group>
  );
};

export default DropdownComponent;
