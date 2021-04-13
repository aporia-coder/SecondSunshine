import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import {
  InfoGridContainer,
  CozyHouseImg,
  PictureGrid,
  TropicalHouseImg,
  Card,
} from "./InfoGridElements";
import DropdownNav from "../DropdownNav";
import {
  Container,
  Heading,
  MainText,
  Hidden,
  StyledLink,
} from "../../utilities/utils";
import whitehouse from "../../assets/images/white-house.jpg";
// import tropicalhouse from "../../assets/images/tropical-house-2.jpg";

const InfoGrid = () => {
  gsap.registerPlugin(ScrollTrigger);
  const whiteHouseRef = useRef(null);
  const imgOverlay = useRef(null);

  useEffect(() => {
    gsap.from(whiteHouseRef.current, {
      scrollTrigger: {
        trigger: whiteHouseRef.current,
        start: "top bottom",
        scrub: 1,
        duration: 2,
      },
      scale: 1.5,
    });
  }, []);

  return (
    <>
      <Container>
        <InfoGridContainer>
          <div>
            <Heading>
              <StyledLink to="/search">Click Here</StyledLink> to start
              exploring
            </Heading>
            <MainText>
              Comprising of an easy and quick way to find your next home, or
              home away from home! SecondSunshine give's you the ability to
              search for rental properties in any US area that you desire and
              instantly find all the information you need to find your perfect
              rental property.
              <br />
              <br />
              Try using our search feature to access our luxury properties, and
              easily see exactly where they are on our custom map view.
            </MainText>
          </div>
          <Hidden>
            <CozyHouseImg src={whitehouse} ref={whiteHouseRef} />
          </Hidden>
        </InfoGridContainer>
      </Container>
      <PictureGrid>
        <TropicalHouseImg />
        <Card>
          <Heading size={"3rem"}>
            everyone needs a break now and again. easily find your next home for
            a holiday vacation using our{" "}
            <StyledLink to="/search" size="3rem">
              explore feature
            </StyledLink>
          </Heading>
        </Card>
      </PictureGrid>
    </>
  );
};

export default InfoGrid;
