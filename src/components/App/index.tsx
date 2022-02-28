/* global google */

import React, { Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style/theme";
import GlobalStyles from "../../style/globalstyles";
import { MainContainer } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import GoogleMapReact from "google-map-react";
import { useEffect } from "react";
import axios from "axios";
import WeatherCard from "./weatherCard";

const App = () => {
  const [weather, setWeather] = useState({
    sys: { country: "" },
    main: { temp: "", pressure: "", humidity: "" },
  });
  const defaultProps = {
    //  you can get user location also to make that center ,
    //  for simplicity i am using hardcoded value here
    center: {
      lat: 51.91572648399697,
      lng: 4.43452841645066,
    },
    zoom: 16,
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${defaultProps.center.lat}&lon=${defaultProps.center.lng}&appid=a244ad62343d4ebf74fd4bda18cb7cbf`
      )
      .then(({ data }) => {
        setWeather(data);
      })
      .catch((e) => {
        // or call your gobal error handling layer
        toast("some error occured");
      });
  }, []);

  function heatMapData() {
    //  Precipitation data was not free on openweather so i am using dummy
    //  precipitation and showing with heatmap
    return {
      positions: [
        { lat: 51.91572648299697, lng: 4.43452841645066 },
        { lat: 51.91572648899697, lng: 4.43452841645067 },
        { lat: 51.91572648899697, lng: 4.43452841645068 },
        { lat: 51.91572648899697, lng: 4.43452841645069 },
        { lat: 51.91572648799697, lng: 4.43452841645062 },
        { lat: 51.91572648394969, lng: 4.43452841645066 },
        { lat: 51.91572648319695, lng: 4.43452841645067 },
        { lat: 51.91572648319695, lng: 4.43452841645068 },
        { lat: 51.91572648329694, lng: 4.43452841645069 },
        { lat: 51.91572648399692, lng: 4.43452841645062 },
        { lat: 51.91542648299697, lng: 4.43452841645066 },
        { lat: 51.91542648899697, lng: 4.43452841645067 },
        { lat: 51.91542648899697, lng: 4.43452841645068 },
        { lat: 51.91542648899697, lng: 4.43452841645069 },
        { lat: 51.91542648799697, lng: 4.43452841645062 },
        { lat: 51.91592648299697, lng: 4.43452841645066 },
        { lat: 51.91592648899697, lng: 4.43452841645067 },
        { lat: 51.91592648899697, lng: 4.43452841645068 },
        { lat: 51.91592648899697, lng: 4.43452841645069 },
        { lat: 51.91592648799697, lng: 4.43452841645062 },
        { lat: 51.91522648299697, lng: 4.43452841645066 },
        { lat: 51.91522648899697, lng: 4.43452841645067 },
        { lat: 51.91522648899697, lng: 4.43452841645068 },
        { lat: 51.91522648899697, lng: 4.43452841645069 },
        { lat: 51.91522648799697, lng: 4.43452841645062 },
        { lat: 51.91672648299697, lng: 4.43452841645066 },
        { lat: 51.91672648899697, lng: 4.43452841645067 },
        { lat: 51.91672648899697, lng: 4.43452841645068 },
        { lat: 51.91672648899697, lng: 4.43452841645069 },
        { lat: 51.91672648799697, lng: 4.43452841645062 },
        { lat: 51.91682648299697, lng: 4.43452841645066 },
        { lat: 51.91682648899697, lng: 4.43452841645067 },
        { lat: 51.91682648899697, lng: 4.43452841645068 },
        { lat: 51.91682648899697, lng: 4.43452841645069 },
        { lat: 51.91682648799697, lng: 4.43452841645062 },
      ],
      options: {
        // opacity: 0.1,
        radius: 60,
      },
    };
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAWZueg5Aov0-mEgFk5qdKUWI0T-tZYMww",
            }}
            heatmapLibrary={true}
            heatmap={heatMapData()}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          />
          <WeatherCard weather={weather} />
        </MainContainer>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
