// Components
import CurrentWeather from './components/CurrentWeather';
import Layout from './components/layouts/Layout';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import axios from 'axios';

const coordinates = {
  resistencia: { latitude: -27.46, longitude: -58.98 },
  corrientes: { latitude: -27.47, longitude: -58.83 },
  formosa: { latitude: -26.18, longitude: -58.17 },
  posadas: { latitude: -27.37, longitude: -55.9 },
  parana: { latitude: -31.73, longitude: -60.53 },
  rosario: { latitude: -32.95, longitude: -60.64 },
};

function App() {
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('resistencia');

  useEffect(() => {
    const start_date = new Date().toISOString().replace(/([A-Z]).+/, '');
    const next_week = new Date().setDate(new Date().getDate() + 7);
    const end_date = new Date(next_week).toISOString().replace(/([A-Z]).+/, '');

    const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[city].latitude}&longitude=${coordinates[city].longitude}&hourly=temperature_2m,dewpoint_2m,apparent_temperature,visibility,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&start_date=${start_date}&end_date=${end_date}`;

    console.log(start_date);
    console.log(end_date);

    axios.get(baseURL).then((response) => {
      setForecast(response.data);
    });
  }, [city]);

  return (
    <Layout OnSelectCity={setCity}>
      <CurrentWeather />
      {forecast && <p>Temperature: {forecast.hourly?.temperature_2m[0]}°C</p>}
    </Layout>
  );
}

export default App;
