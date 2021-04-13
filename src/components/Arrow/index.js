import React, { useRef } from "react";
import { ArrowContainer, ArrowBody, Sun } from "./ArrowElements";

// Utils
import { useScroll } from "../../utilities/useScroll";

const Arrow = ({ forwardRef }) => {
  const arrowRef = useRef(null);
  return (
    <ArrowContainer ref={forwardRef}>
      <ArrowBody />
      <Sun className="fas fa-sun" />
    </ArrowContainer>
  );
};

export default Arrow;
