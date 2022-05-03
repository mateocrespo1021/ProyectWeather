import { useState } from "react";
import styled from "styled-components";

const WeatherBg = styled.div`
display: flex;

align-items: center;
gap: 2rem;
  padding: 2rem;
  text-align: center;
`;

const WeatherTemp = styled.div`
  p:first-child {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    transition: all 300ms;
    cursor: pointer;
    &:hover{
      color: #4e1717;
    }
  }
  p:last-child {
    font-weight: normal;
    font-size: 1.8rem;
  }
`;

const WeatherName = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #1d1d5e;
`;

const WeatherImg = styled.div`
  font-size: 2rem;
  p {
    margin: 0;
    font-weight: bold;
  }
`;
const Weather = ({ infoResp }) => {
  const [celsius, setCelsius] = useState(true);
  const {
    name,
    sys: { country },
    weather,
    main: { temp },
  } = infoResp;
  return (
    <WeatherBg>
      <WeatherTemp>
        <p onClick={() => setCelsius(!celsius)}>
          {celsius
            ? `${(((temp - 32) * 5) / 9).toFixed(2)}C`
            : `${temp.toFixed(2)}F`}
        </p>
        <p>
          {celsius
            ? "Click to the number to change to Farenheit"
            : "Click to the number to change to Celsius"}
        </p>
      </WeatherTemp>
      <WeatherName>
        <p>{name}</p>
        <p>{country}</p>
      </WeatherName>
      <WeatherImg>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="icon weather"
        />
        <p>{weather[0].description}</p>
      </WeatherImg>
    </WeatherBg>
  );
};

export default Weather;
