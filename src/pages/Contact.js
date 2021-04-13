import React, { useRef, useEffect } from "react";
import gsap from "gsap";

// Components
import {
  Heading,
  Container,
  HeightContainer,
  Hidden,
  SearchButton,
} from "../utilities/utils";
import { FormInput } from "../components/SearchInput/SearchInputElements";
import { ContactContainer } from "../components/Contact/ContactElements";

const Contact = () => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  useEffect(() => {
    gsap.from(headingRef1.current, {
      y: "100%",
      duration: 0.75,
      ease: "power1.inOut",
    });
    gsap.from(headingRef2.current, {
      y: "100%",
      duration: 0.75,
      ease: "power1.inOut",
      delay: 0.4,
    });
  }, []);
  return (
    <ContactContainer>
      <Container flex center column>
        <Hidden>
          <Heading ref={headingRef1}>contact</Heading>
          <Heading main ref={headingRef2}>
            {" "}
            us
          </Heading>
        </Hidden>
        <form name="contact-form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-form" />
          <FormInput
            name="email"
            type="email"
            placeholder={"Enter Email"}
            contact
          ></FormInput>
          <FormInput
            name="name"
            type="text"
            placeholder={"Enter Name"}
            contact
          ></FormInput>
          <textarea name="message" placeholder={"Your Message"}></textarea>
          <SearchButton type="submit">Submit</SearchButton>
        </form>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
