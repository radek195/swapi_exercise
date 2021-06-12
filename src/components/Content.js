import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";

import List from "./List";
import Planet from "./Planet";
import Filtering from "./Filtering";

import "./style.css";

const Content = ({ planets }) => {
  const [toRender, setToRender] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    setToRender(planets);
    setFilter();
  }, [planets]);

  useEffect(() => {
    const filteredResult = planets.filter((result) => {
      return result.name.toLowerCase().includes(filter.toLowerCase());
    });
    setToRender(filteredResult);
  }, [filter, setFilter]);

  const renderPlanets = toRender.map((planet, index) => {
    return <Planet planet={planet} key={index} />;
  });

  return (
    <Container className={"d-flex justify-content-center p-4"}>
      <div>
        {planets.length < 1 ? (
          <>
            <Spinner animation="border" />
          </>
        ) : (
          <>
            <Filtering filter={filter} setFilter={setFilter} />
            <List items={renderPlanets} />
          </>
        )}
      </div>
    </Container>
  );
};

export default Content;
