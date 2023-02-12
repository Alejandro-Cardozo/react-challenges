// Styles
import classes from './WeatherDetails.module.css';

const WeatherDetails = ({ weatherData }) => {
  const {
    humidity,
    dewpoint,
    apparent_temperature,
    visibility,
    windspeed,
    winddirection,
  } = weatherData;

  return (
    <div className={classes.details}>
      <div className={classes.item}>
        <p>Sensación Térmica {apparent_temperature}°C</p>
      </div>
      <div className={classes.item}>
        <p>Viento <span>-&gt;</span> {windspeed} km/h</p>
      </div>
      <div className={classes.item}>
        <p>Visibilidad {visibility/1000} km</p> 
      </div>
      <div className={classes.item}>
        <p>Humedad {humidity}%</p>
      </div>
      <div className={classes.item}>
        <p>Punto de Rocío {dewpoint}°C</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
