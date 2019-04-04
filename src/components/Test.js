// @flow
import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const hfsdjf = () => setCount(count + 1);
  return <div>{count} </div>;
};

export default Test;
