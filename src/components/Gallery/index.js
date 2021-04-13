import React, { useEffect, useRef } from "react";
import { GalleryContainer, GalleryGrid } from "./GalleryElements";
import { AboutTextContainer } from "../About/AboutElements";
import { Container, Heading } from "../../utilities/utils";
import Arrow from "../Arrow";
import { gsap, ScrollTrigger } from "gsap/all";
import { SRLWrapper } from "simple-react-lightbox";

// Images
import gallery1 from "../../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../../assets/images/gallery/gallery-6.jpg";

const Gallery = () => {
  const options = {
    thumbnails: {
      thumbnailsSize: ["200px", "100px"],
    },
  };

  gsap.registerPlugin(ScrollTrigger);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: "top bottom",
        scrub: 1,
      },
    });
    tl.from(backgroundRef.current, {
      backgroundColor: "#fff",
    });
  }, []);

  return (
    <GalleryContainer ref={backgroundRef}>
      <Container flex center column>
        <AboutTextContainer>
          <Arrow />
          <Heading> Gallery</Heading>
        </AboutTextContainer>
        <SRLWrapper>
          <GalleryGrid>
            <a href={gallery1}>
              <img src={gallery1} alt="House" />
            </a>
            <a href={gallery2}>
              <img src={gallery2} alt="House" />
            </a>
            <a href={gallery3}>
              <img src={gallery3} alt="House" />
            </a>
            <a href={gallery4}>
              <img src={gallery4} alt="House" />
            </a>
            <a href={gallery5}>
              <img src={gallery5} alt="House" />
            </a>
            <a href={gallery6}>
              <img src={gallery6} alt="House" />
            </a>
          </GalleryGrid>
        </SRLWrapper>
      </Container>
    </GalleryContainer>
  );
};

export default Gallery;
