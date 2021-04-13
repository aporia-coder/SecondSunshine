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
