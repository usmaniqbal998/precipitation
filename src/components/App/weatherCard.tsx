import React from "react";
import { Card } from "./styles";

interface IWeatherCardProps {
  weather: any;
}

const WeatherCard: React.FunctionComponent<IWeatherCardProps> = ({
  weather,
}) => {
  return (
    <Card>
      <p>Country: {weather?.sys?.country}</p>
      <p>Temp: {weather?.main?.temp}</p>
      <p>Pressure: {weather?.main?.pressure}</p>
      <p>Humidity: {weather?.main?.humidity}</p>
    </Card>
  );
};

export default WeatherCard;
