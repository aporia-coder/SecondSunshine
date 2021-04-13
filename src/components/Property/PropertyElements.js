import styled from "styled-components";

export const ImageContainer = styled.div`
  height: ${(props) => (props.results ? "15rem" : "10rem")};
  width: ${(props) => (props.results ? "20rem" : "15rem")};
  margin: ${(props) => props.results && "0rem 3rem"};
  object-fit: cover;
`;

export const PropertyImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const PropertyContainer = styled.div`
  display: ${(props) => props.results && "flex"};
  width: 100%;
  margin: 1rem 0rem;
  h5 {
    font-size: ${(props) => (props.results ? "1.5rem" : "1rem")};
    padding: 0.5rem;
  }
  h4 {
    text-transform: capitalize;
    font-size: ${(props) => (props.results ? "1.2rem" : "0.8rem")};
    padding: 0.5rem;
  }
  h3 {
    display: inline-block;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.primary};
    font-size: 1.3rem;
    margin-left: 0.5rem;
  }
`;
