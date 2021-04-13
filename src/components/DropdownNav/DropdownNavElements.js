import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownNavbar = styled.nav`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 3;
  height: 6rem;
  width: 100%;
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  transform: translateY(-110%);
`;

export const DropdownNavContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
  padding-bottom: 2px;
  margin: 0 2rem;
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
`;
