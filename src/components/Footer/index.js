import React, { useEffect } from "react";
import {
  FooterContainer,
  FooterGrid,
  FooterText,
  ScrollUp,
} from "./FooterElements";
import { Container, Heading } from "../../utilities/utils";

const Footer = () => {
  const setScroll = () => window.scrollTo(0, 0);

  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <div>
            <Heading size="3rem">Second</Heading>
            <Heading size="3rem" main>
              Sunshine
            </Heading>
            <FooterText>Privacy Policy</FooterText>
            <FooterText>Terms and Conditions</FooterText>
            <div>
              <i class="fab fa-github fa-2x"></i>
              <i class="fab fa-facebook fa-2x"></i>
              <i class="fab fa-instagram fa-2x"></i>
              <i class="fab fa-twitter fa-2x"></i>
            </div>
          </div>
          <ScrollUp onClick={() => setScroll()}>
            <i class="fas fa-chevron-up"></i>
          </ScrollUp>
        </FooterGrid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
