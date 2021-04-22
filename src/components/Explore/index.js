import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import gsap from "gsap";

// Components
// import Search from "./Search";
import Property from "../Property";
import { MapContainer, ResultsContainer } from "../Map/MapElements";
import { SearchContainer, Form, SearchInput } from "../Search/SearchElements";
import {
  Container,
  Heading,
  SearchButton,
  Hidden,
} from "../../utilities/utils";
import mapStyles from "../../utilities/mapStyles";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import uuid from "react-uuid";

// Maps

const libraries = ["places"];

const mapContainerStyle = {
  height: "100%",
  width: "100%",
  position: "relative",
};

const center = {
  lat: 39.011902,
  lng: -98.484245,
};

const Explore = ({ properties, forwardRef }) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const mapViewRef = useRef(null);
  const showOnMapRef = useRef(null);
  const [city, setCity] = useState("");
  const [state_code, setState_code] = useState("");
  const [price_max, setPrice_max] = useState(0);
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const showOnMap = (id) => {
    let result = properties.filter((property) => {
      return property.property_id === id;
    });
    setSelectedProperty(result[0]);
  };

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  const mapOptions = {
    styles: mapStyles,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB90x8iXUZKY1PYdZySu6zvfPKbcy6SO8M",
    libraries,
  });
  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps...";

  return (
    <MapContainer ref={forwardRef}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        onLoad={onMapLoad}
        options={mapOptions}
      >
        {properties.map((property) => (
          <Marker
            key={uuid()}
            position={{
              lat: property.address.lat,
              lng: property.address.lon,
            }}
            onClick={() => {
              setSelectedProperty(property);
            }}
            onPositionChanged={panTo({
              lat: property.address.lat,
              lng: property.address.lon,
            })}
          ></Marker>
        ))}
        {selectedProperty && (
          <InfoWindow
            position={{
              lat: selectedProperty.address.lat,
              lng: selectedProperty.address.lon,
            }}
            onCloseClick={() => {
              setSelectedProperty(null);
            }}
          >
            <>
              <Property
                image={selectedProperty.photos[0].href}
                city={selectedProperty.address.city}
                address={selectedProperty.address.line}
                type={selectedProperty.prop_type}
                yearBuilt={selectedProperty.year_built}
                map={true}
                results={false}
              />
            </>
          </InfoWindow>
        )}
      </GoogleMap>
      <ResultsContainer>
        {properties.map((property) => {
          return (
            <Property
              image={property.photos[0].href}
              beds={property.community.beds_max}
              price={property.community.price_min}
              city={property.address.city}
              address={property.address.line}
              type={property.prop_type}
              yearBuilt={property.year_built}
              results={true}
              properties={properties}
              id={property.property_id}
              key={property.property_id}
              showOnMap={showOnMap}
            />
          );
        })}
      </ResultsContainer>
    </MapContainer>
  );
};

export default Explore;
