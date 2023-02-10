// Components
import WeatherDetails from './WeatherDetails';

// Styles
import classes from './CurrentWeather.module.css';

// Data
import { details } from '../data/data';

const CurrentWeather = ({ forecast, city }) => {
  const getDetails = (forecastParam) => {
    if (!forecastParam) {
      return details.none;
    }
    if (forecastParam.hourly?.precipitation[0] > 1) {
      return details.rainy;
    }
    if (forecastParam.hourly?.cloudcover > 50) {
      return details.cloudy;
    }
    if (forecastParam.hourly?.cloudcover > 20) {
      if (new Date().getHours() > 5 && new Date().getHours() < 20) {
        return details.cloudyDay;
      } else {
        return details.cloudyNight;
      }
    }
    if (new Date().getHours() > 5 && new Date().getHours() < 20) {
      return details.sunny;
    } else {
      return details.night;
    }
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
  const { Icon, tag, color, weight } = getDetails(forecast);

  return (
    <section className={classes.main}>
      <h3>{city}</h3>
      <div className={classes.temperature}>
        <Icon
          size={128}
          alt={tag}
          color={color}
          weight={weight}
          className={classes.icon}
        />
        {forecast && (
          <h3 className={classes.degrees}>
            {forecast.hourly?.temperature_2m[weatherIndex]}°
          </h3>
        )}
        {forecast && <h4 className={classes.celsius}>C</h4>}
      </div>
      <p>{tag}</p>
      <WeatherDetails />
    </section>
  );
};

export default CurrentWeather;
