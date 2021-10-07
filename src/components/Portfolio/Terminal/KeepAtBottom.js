import React, { useEffect, useRef } from "./node_modules/react";

const KeepAtBottom = () => {
  const reference = useRef();
  useEffect(() => reference.current.scrollIntoView());
  return <div ref={reference} />;
};

export default KeepAtBottom;
