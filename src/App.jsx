// Components
import CurrentWeather from './components/CurrentWeather';
import Layout from './components/layouts/Layout';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import axios from 'axios';

// Data
import { coordinates } from './data/data';

function App() {
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('posadas');

  useEffect(() => {
    const start_date = new Date().toISOString().replace(/([A-Z]).+/, '');
    const next_week = new Date().setDate(new Date().getDate() + 6);
    const end_date = new Date(next_week).toISOString().replace(/([A-Z]).+/, '');

    const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[city].latitude}&longitude=${coordinates[city].longitude}&hourly=temperature_2m,dewpoint_2m,apparent_temperature,precipitation,cloudcover,visibility,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America%2FSao_Paulo&start_date=${start_date}&end_date=${end_date}`;

    axios.get(baseURL).then((response) => {
      setForecast(response.data);
    });
  }, [city]);

  return (
    <Layout OnSelectCity={setCity}>
      <CurrentWeather forecast={forecast} city={coordinates[city].details} />
    </Layout>
  );
}

export default App;
