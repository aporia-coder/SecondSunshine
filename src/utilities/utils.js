import { Link } from "react-router-dom";
import gsap from "gsap";
import styled from "styled-components";

export const Heading = styled.h4`
  font-family: ${(props) => props.theme.textPrimary};
  font-size: ${(props) => (props.size ? props.size : "4rem")};
  font-weight: 300;
  text-transform: capitalize;
  display: inline-block;
  color: ${(props) => props.main && props.theme.primary};
  border-bottom: ${(props) => props.main && "3px solid;"};
  @media (max-width: 655px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: ${(props) => props.flex && "flex"};
  flex-direction: ${(props) => props.column && "column"};
  align-items: ${(props) => props.flex && "center"};
  justify-content: ${(props) =>
    props.flex && props.center ? "center" : "space-between"};
`;

export const MainText = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 3rem 0;
  letter-spacing: 1px;
  font-weight: 300;
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const Hidden = styled.div`
  overflow: hidden;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  height: 3rem;
  width: 7rem;
  border-radius: 5px;
  margin: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: inherit;
  border: 1px solid ${(props) => props.theme.primary};
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`;

export const DefaultLink = styled(Link)`
  color: ${(props) => props.theme.primary};
`;

export const HeightContainer = styled.div`
  min-height: calc(100vh - 3rem);
`;

export const StyledLink = styled(Link)`
  font-family: ${(props) => props.theme.textPrimary};
  font-size: ${(props) => (props.size ? props.size : "4rem")};
  font-weight: 300;
  text-transform: capitalize;
  display: inline-block;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  @media (max-width: 655px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const ScrollUp = styled.div`
  background-color: #4b4b4b;
  position: fixed;
  z-index: 2;
  right: 10%;
  bottom: 5%;
  height: 4rem;
  width: 4rem;
  transform: rotate(45deg);
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.primary};
  i {
    transform: rotate(-45deg);
    font-size: 3rem;
    color: ${(props) => props.theme.secondary};
  }
`;
