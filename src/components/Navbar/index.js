import React, { useEffect, useRef } from "react";
import { Nav, NavLink } from "./NavbarElements";
import { Container } from "../../utilities/utils";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef1 = useRef(null);
  const navRef2 = useRef(null);
  const navRef3 = useRef(null);

  useEffect(() => {
    const navRefs = [navRef1.current, navRef2.current, navRef3.current];

    gsap.from(navRefs, {
      opacity: 0,
      y: "-100%",
      duration: 1,
      stagger: 0.4,
    });
  }, []);

  return (
    <Nav>
      <Container flex>
        <NavLink to="/" ref={navRef1}>
          home
        </NavLink>
        <NavLink to="/search" ref={navRef2}>
          explore
        </NavLink>
        <NavLink to="/contact" ref={navRef3}>
          contact
        </NavLink>
      </Container>
    </Nav>
  );
};

export default Navbar;
