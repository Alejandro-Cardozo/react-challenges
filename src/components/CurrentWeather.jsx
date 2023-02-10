// Components
import WeatherDetails from './WeatherDetails';

// Styles
import classes from './CurrentWeather.module.css';

// Data
import { details } from '../data/data';
import { useState } from 'react';

const CurrentWeather = ({ forecast, city }) => {
  const getDetails = (forecast) => {
    if (forecast.hourly?.precipitation[0] > 1) {
      return details.rainy;
    }
    if (forecast.hourly?.cloudcover > 50) {
      return details.cloudy;
    }
    // if (forecast.hourly?.cloudcover > 20) {
    //   if ()
    // }
  };

  const roundToNearestHour = (date) => {
    date.setMinutes(date.getMinutes() + 30);
    date.setMinutes(0, 0, 0);

    return date;
  };

  const currentWeatherIndex = () => {
    if (forecast?.hourly?.time) {
      const currentTimeRounded = roundToNearestHour(new Date()).valueOf();
      const parsedHours = forecast.hourly.time.map((el) =>
        new Date(el).valueOf()
      );
      return parsedHours.findIndex((el) => el === currentTimeRounded);
    } else {
      return 12;
    }
  };

  const weatherIndex = currentWeatherIndex();

  return (
    <section className={classes.main}>
      <h3>{city}</h3>
      <div className={classes.temperature}>
        {/* <Sun size={128} alt='sunny' color='yellow' /> */}
        {forecast && (
          <h3 className={classes.degrees}>
            {forecast.hourly?.temperature_2m[weatherIndex]}°
          </h3>
        )}
        <h4 className={classes.celsius}>C</h4>
      </div>
      <p>description</p>
      <WeatherDetails />
    </section>
  );
};

export default CurrentWeather;
