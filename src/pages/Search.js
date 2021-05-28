import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import gsap from "gsap";
// Make sure to change and change imports from map to search elements

import { realtorApiKey } from "../utilities/api";

// Components
import {
  SearchContainer,
  Form,
  SearchInput,
} from "../components/Search/SearchElements";
// import { Form, SearchInput } from "../Map/MapElements";
import { Container, Heading, SearchButton, Hidden } from "../utilities/utils";
import Explore from "../components/Explore";

const Search = () => {
  const history = useHistory();
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapViewRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [state_code, setState_code] = useState("");
  const [maxPrice, setPrice_max] = useState(0);
  const [properties, setProperties] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(heroRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 0.8,
    });
    tl.from(
      formRef.current,
      {
        opacity: 0,
        duration: 1,
      },
      "-=0.3",
    );
  }, []);

  const axiosOptions = {
    method: "GET",
    url: "https://realtor.p.rapidapi.com/properties/v2/list-for-rent",
    params: {
      city,
      state_code,
      limit: "15",
      offset: "0",
      price_max: maxPrice,
      sort: "relevance",
    },
    headers: {
      "x-rapidapi-key": `${realtorApiKey}`,
      "x-rapidapi-host": "realtor.p.rapidapi.com",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors("");
    setLoading(true);
    axios
      .request(axiosOptions)
      .then((res) => {
        if (res.data.properties.length > 0) {
          setProperties(res.data.properties);
          mapViewRef.current.scrollIntoView();
        } else {
          setErrors("Check details and try to search again");
        }
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Hidden>
        <SearchContainer ref={heroRef}>
          <Container flex>
            <Form ref={formRef}>
              <Heading size={"3rem"}>
                Search our{" "}
                <Heading main size={"3rem"}>
                  USA
                </Heading>{" "}
                Properties
              </Heading>
              <label>
                City:
                <SearchInput
                  placeholder={"Enter City... (USA only)"}
                  onChange={(e) => setCity(e.target.value)}
                  errors={errors}
                />
              </label>
              <label>
                State Code:
                <SearchInput
                  placeholder={"Enter State Code"}
                  onChange={(e) => setState_code(e.target.value)}
                  errors={errors}
                />
              </label>
              <label>
                Max Price:
                <SearchInput
                  placeholder={"Max $ per Month"}
                  onChange={(e) => setPrice_max(e.target.value)}
                  errors={errors}
                />
              </label>
              <SearchButton type="submit" onClick={handleSubmit}>
                {loading ? "Loading..." : "Search"}
              </SearchButton>
              <p>{errors && errors}</p>
            </Form>
          </Container>
        </SearchContainer>
      </Hidden>
      <Explore properties={properties} forwardRef={mapViewRef} />
    </>
  );
};

export default Search;
