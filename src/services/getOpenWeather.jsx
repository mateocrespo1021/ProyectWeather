import axios from "axios";

//Funcion que consume la API OpenWheather
export const getOpenWeather = async (lat, lon) => {
  const ApiKey = "5dda21a6a93df59b80420763c7d872e0";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
  
  const req=await axios.get(URL);
  return req;
};
