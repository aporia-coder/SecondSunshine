import React, { useEffect } from "react";
import { NavLink } from "../Navbar/NavbarElements";
import {
  DropdownNavbar,
  DropdownNavContainer,
  DropdownNavLink,
} from "../DropdownNav/DropdownNavElements";
import { Container, Heading } from "../../utilities/utils";

const DropdownNav = () => {
  return (
    <DropdownNavbar>
      <Container>
        <Container flex>
          <div style={{ paddingBottom: "5px" }}>
            <Heading size={"3rem"} main>
              second
            </Heading>
            <Heading size={"3rem"}>sunshine</Heading>
          </div>
          <DropdownNavContainer>
            <DropdownNavLink>home</DropdownNavLink>
            <DropdownNavLink>explore</DropdownNavLink>
            <DropdownNavLink>contact</DropdownNavLink>
          </DropdownNavContainer>
        </Container>
      </Container>
    </DropdownNavbar>
  );
};

export default DropdownNav;
