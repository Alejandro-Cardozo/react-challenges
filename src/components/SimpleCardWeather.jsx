// Data
import { details } from '../data/data';

// Styles
import classes from './SimpleCardWeather.module.css';

const { rainy, cloudy, sunny, cloudyDay } = details;

const SimpleCardWeather = ({ day, max_temp, min_temp, precipitation_sum }) => {
  const weather =
    precipitation_sum > 5
      ? {
          label: rainy.tag,
          icon: (
            <rainy.Icon
              size={32}
              alt={rainy.tag}
              color={rainy.color}
              weight={rainy.weight}
            />
          ),
        }
      : precipitation_sum > 3
      ? {
          label: cloudy.tag,
          icon: (
            <cloudy.Icon
              size={32}
              alt={cloudy.tag}
              color={cloudy.color}
              weight={cloudy.weight}
            />
          ),
        }
      : precipitation_sum > 1
      ? {
          label: cloudyDay.tag,
          icon: (
            <cloudyDay.Icon
              size={32}
              alt={cloudyDay.tag}
              color={cloudyDay.color}
              weight={cloudyDay.weight}
            />
          ),
        }
      : {
          label: sunny.tag,
          icon: (
            <sunny.Icon
              size={32}
              alt={sunny.tag}
              color={sunny.color}
              weight={sunny.weight}
            />
          ),
        };

  const toArgentinianDate = (date) => {
    const event = new Date(date);
    const options = { weekday: 'long', day: 'numeric' };
    return event
      .toLocaleDateString('es-AR', options)
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  };

  return (
    <div className={classes.card}>
      <h4>{toArgentinianDate(day)}</h4>
      {weather.icon}
      <div className={classes.temperatures}>
        <h2>{Math.round(max_temp)}°</h2>
        <h5>{Math.round(min_temp)}°</h5>
      </div>
      <h5>{weather.label}</h5>
    </div>
  );
};

export default SimpleCardWeather;
