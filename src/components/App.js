import React, { useState, useEffect } from "react";
import api from "./api/api";

import Pagination from "./Pagination";
import Content from "./Content";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [current, setCurrent] = useState(1);

  const fetchPage = async (count) => {
    const response = await api.get(`/?page=${count}`);
    setPlanets(response.data.results);
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
