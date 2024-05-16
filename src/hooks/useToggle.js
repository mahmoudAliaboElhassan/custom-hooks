import React, { useState } from "react";

const UseToggle = (initialValue = false) => {
  const [status, setStatus] = useState(initialValue);
  const toggle = () => {
    setStatus((prevValue) => !prevValue);
  };
  return [status, toggle];
};

export default UseToggle;
