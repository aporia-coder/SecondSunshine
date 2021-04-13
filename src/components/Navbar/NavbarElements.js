import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: ${(props) => props.theme.navHeight};
  width: 100%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.2rem;
  padding-bottom: 2px;
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
`;
