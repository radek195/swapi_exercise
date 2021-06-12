import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Filtering = ({ filter, setFilter }) => {
  const [input, setInput] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter(input);
    }, 600);

    return () => clearTimeout(timeout);
  }, [input, setFilter]);

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Filter by name:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="eg. Hoth"
          aria-label="filtering input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </InputGroup>
    </>
  );
};

export default Filtering;
