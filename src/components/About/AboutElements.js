import styled from "styled-components";

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArrowBody = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 10rem;
  width: 1px;
`;

export const Sun = styled.i`
  color: ${(props) => props.theme.primary};
`;

export const AboutTextContainer = styled.div`
  width: ${(props) => props.width};
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    color: rgb(100, 100, 100);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    display: inline-block;
    margin: 1rem 0rem 2rem 0rem;
  }
`;

export const Sun2 = styled.i`
  font-size: 3rem;
  color: ${(props) => props.theme.primary};
`;
