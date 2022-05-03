import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";
import { getOpenWeather } from "./services/getOpenWeather";

function App() {
  const [infoResp, setInfoResp] = useState({});
  useEffect(() => {
    //Obtengo la posicion y hago la petición
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const resp = await getOpenWeather(
        pos.coords.latitude,
        pos.coords.longitude
      );
      setInfoResp(resp.data);
    });
  }, []);

  return (
    <div className={infoResp.name?"App-info":"App"}>
      {infoResp.name ? (
        <>
          <Weather infoResp={infoResp}></Weather>
          <WeatherDetails infoResp={infoResp}></WeatherDetails>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
}

export default App;
