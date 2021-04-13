import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Container,
  HeightContainer,
  DefaultLink,
} from "../utilities/utils";

const Error = () => {
  return (
    <HeightContainer>
      <Container flex center column>
        <Heading>404</Heading>
        <Heading size={"2rem"}>
          Sorry, this page doesn't exist. Do you want to head{" "}
          <DefaultLink>Home?</DefaultLink>
        </Heading>
      </Container>
    </HeightContainer>
  );
};

export default Error;
