import React, { useEffect, useRef } from "react";
import Arrow from "../Arrow";
import { AboutTextContainer, Sun2 } from "./AboutElements";
import { Container, Heading, MainText } from "../../utilities/utils";
import DropdownNav from "../DropdownNav";
import { gsap, ScrollTrigger } from "gsap/all";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headingRef = useRef(null);
  const sunRef = useRef(null);
  const dropNav = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom",
        end: "+=500",
        scrub: 1,
        duration: 4,
      },
      opacity: 0,
    });

    gsap.from(sunRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        scrub: false,
      },
      scale: 0,
      ease: "elastic",
    });
  }, []);

  return (
    <>
      <DropdownNav />
      <Container>
        <Arrow forwardRef={triggerRef} />
        <AboutTextContainer width="50vw">
          <span>about us</span>
          <Heading ref={headingRef}>
            at SecondSunshine we help you find your dream USA rental property.
          </Heading>
        </AboutTextContainer>
        <AboutTextContainer width="20vw">
          <Sun2 className="far fa-sun" ref={sunRef} />
        </AboutTextContainer>
      </Container>
    </>
  );
};

export default About;
