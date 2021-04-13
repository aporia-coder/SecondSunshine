import React, { useRef, useEffect } from "react";
import { Heroh1, HeroContainer, HeroImg } from "./HeroElements";
import { Container } from "../../utilities/utils";
import { gsap, ScrollTrigger } from "gsap/all";
import Arrow from "../Arrow";
import HouseImg1 from "../../assets/images/house1.jpg";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headingRef = useRef(null);
  const houseRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      duration: 1,
      y: "10%",
      delay: 0.7,
    });
    gsap.to(houseRef.current, {
      opacity: 1,
      duration: 1,
    });
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "bottom 80%",
        scrub: 1,
      },
    });
    tls.to(headingRef.current, {
      color: "#f1f1f1",
      duration: 2,
    });
    tls.to(
      houseRef.current,
      {
        scale: 1.05,
        duration: 2,
      },
      "-=2",
    );
  }, []);

  return (
    <Container>
      <HeroContainer>
        <Heroh1 ref={headingRef}>welcome to your dream house</Heroh1>
        <HeroImg src={HouseImg1} ref={houseRef} />
      </HeroContainer>
    </Container>
  );
};

export default Hero;
