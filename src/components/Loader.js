import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  const [timeoutMessage, setTimeoutMessage] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutMessage(
        "Something went wrong. Check console for error message."
      );
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={"d-flex flex-column align-items-center p-4"}>
      <Spinner animation="border" />
      <p>{timeoutMessage}</p>
    </div>
  );
};

export default Loader;
