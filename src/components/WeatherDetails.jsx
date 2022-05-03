import React from "react";
import styled from "styled-components";

const Details = styled.div`
  margin-top: 2rem;
  background-color: #ccc;
  opacity: .5;
  padding: 2rem;
  text-align: center;
  h1 {
    color: #1d1d5e;
  }
  p {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const WeatherDetails = ({ infoResp }) => {
  const {
    clouds: { all },
    main: { humidity, pressure },
    wind: { speed },
  } = infoResp;
  return (
    <Details>
      <h1>Weather Details</h1>
      <p>
        Cloudy <span>{all}%</span>
      </p>
      <p>
        Humidity <span>{humidity}%</span>
      </p>
      <p>
        Wind <span>{speed}</span>
      </p>
      <p>
        {" "}
        Atmospheric pressure <span>{pressure}hPa</span>
      </p>
    </Details>
  );
};

export default WeatherDetails;
