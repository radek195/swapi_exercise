import React, { useState, useEffect } from "react";
import api from "./api/api";

import Pagination from "./Pagination";
import Content from "./Content";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [current, setCurrent] = useState(1);

  const fetchPage = (count) => {
    api
      .get(`/?page=${count}`)
      .then((res) => {
        setPlanets(res.data.results);
      })
      .catch((err) => {
        console.log(
          "Error occured during request. Please check your connection or try again later."
        );
        console.log("Error message: ");
        console.log(err);
      });
  };

  useEffect(() => {
    setPlanets([]);
    fetchPage(current);
  }, [current]);

  return (
    <div>
      <Pagination current={current} setCurrent={setCurrent} />

      <Content planets={planets} />
    </div>
  );
};

export default App;
