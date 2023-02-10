import WeatherDetails from './WeatherDetails';
import classes from './CurrentWeather.module.css';
import { details } from '../data/data';

const isDaytime = (date) => {
  const hours = date.getHours();
  return hours > 5 && hours < 20;
};

const getWeatherDetails = (forecast) => {
  if (!forecast) {
    return details.none;
  }

  const { precipitation, cloudcover } = forecast.hourly;
  const dayTime = isDaytime(new Date());

  if (precipitation[0] > 1) {
    return details.rainy;
  }

  if (cloudcover > 50) {
    return details.cloudy;
  }

  if (cloudcover > 20) {
    return dayTime ? details.cloudyDay : details.cloudyNight;
  }

  return dayTime ? details.sunny : details.night;
};

const roundToNearestHour = (date) => {
  date.setMinutes(date.getMinutes() + 30);
  date.setMinutes(0, 0, 0);
  return date;
};

const getCurrentWeatherIndex = (forecast) => {
  if (!forecast || !forecast.hourly || !forecast.hourly.time) {
    return 12;
  }

  const currentTimeRounded = roundToNearestHour(new Date()).valueOf();
  const parsedHours = forecast.hourly.time.map((time) => new Date(time).valueOf());
  return parsedHours.findIndex((hour) => hour === currentTimeRounded);
};

const CurrentWeather = ({ forecast, city }) => {
  const weatherIndex = getCurrentWeatherIndex(forecast);
  const { Icon, tag, color, weight } = getWeatherDetails(forecast);

  return (
    <section className={classes.main}>
      <h1>{city}</h1>
      <div className={classes.temperature}>
        <Icon
          size={128}
          alt={tag}
          color={color}
          weight={weight}
          className={classes.icon}
        />
        {forecast && (
          <>
            <h3 className={classes.degrees}>
              {forecast.hourly.temperature_2m[weatherIndex]}°
            </h3>
            <h4 className={classes.celsius}>C</h4>
          </>
        )}
      </div>
      <h2>{tag}</h2>
      <WeatherDetails />
    </section>
  );
};

export default CurrentWeather;