import React, { useEffect } from "react";
import {
  PropertyImage,
  ImageContainer,
  PropertyContainer,
} from "./PropertyElements";

const Property = ({
  image,
  beds,
  price,
  city,
  address,
  type,
  yearBuilt,
  map,
  results,
  properties,
  showOnMap,
  id,
}) => {
  return (
    <PropertyContainer results={results}>
      <ImageContainer results={results}>
        <PropertyImage src={image} />
      </ImageContainer>
      <div>
        <h5>{`Address: ${city}, ${address}`}</h5>
        <h4>{`Property Type: ${type}, Built in ${yearBuilt}`}</h4>
        {results && <h4>Number of beds: {Math.ceil(beds)}</h4>}
        {results && <h4>Price per month: ${price}</h4>}
        {!map && <h3 onClick={() => showOnMap(id)}>show on map</h3>}
      </div>
    </PropertyContainer>
  );
};

export default Property;
