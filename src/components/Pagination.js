import React from "react";
import { Container } from "react-bootstrap";
import { isActive } from "../helpers";

import "./style.css";

const Pagination = ({ current, setCurrent }) => {
  let items = [];

  for (let i = 1; i < 7; i++) {
    let nextItem = (
      <li
        key={i}
        className={isActive(current, i)}
        onClick={() => setCurrent(i)}
      >
        {i}
      </li>
    );
    items = [...items, nextItem];
  }
  return (
    <Container className={"d-flex justify-content-center p-4"}>
      <ul className="pagination">{items}</ul>
    </Container>
  );
};

export default Pagination;
