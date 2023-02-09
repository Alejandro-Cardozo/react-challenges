// Components
import CurrentWeather from './components/CurrentWeather';
import Layout from './components/layouts/Layout';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import axios from "axios";

const coordinates = {
  resistencia: {latitude: -27.46, longitude: -58.98},
  corrientes: {latitude: -27.47, longitude: -58.83},
  formosa: {latitude: -26.18, longitude: -58.17},
  posadas: {latitude: -27.37, longitude: -55.90},
  rosario: {latitude: -32.95, longitude: -60.64},
}

const baseURL = "https://api.open-meteo.com/v1/forecast?latitude=-39.10&longitude=-67.07&hourly=temperature_2m,dewpoint_2m,apparent_temperature,visibility,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&start_date=2023-02-09&end_date=2023-02-14";

function App() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setForecast(response.data);
    });
  }, []);
  
  return (
    <Layout>
      <CurrentWeather />
      {forecast && <p>Temperature: {forecast.hourly?.temperature_2m[0]}°C</p>}
    </Layout>
  );
}

export default App;
