// Icons
import { NavigationArrow } from 'phosphor-react';

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
        <p>
          Viento
          <span className={classes.value}>
            <span>
              <NavigationArrow
                className={classes.navArrow}
                size={16}
                color='#eeeeec'
                weight='fill'
                style={{
                  transform: `rotate(calc(135deg + ${winddirection}deg))`,
                }}
              />
            </span>{' '}
            {windspeed}
          </span>{' '}
          km/h
        </p>
      </div>
      <div className={classes.item}>
        <p>
          Humedad <span className={classes.value}>{humidity}</span>%
        </p>
      </div>
      <div className={classes.item}>
        <p>
          Visibilidad <span className={classes.value}>{visibility / 1000}</span>{' '}
          km
        </p>
      </div>
      <div className={classes.item}>
        <p>
          Sensación Térmica{' '}
          <span className={classes.value}>{apparent_temperature}</span>°C
        </p>
      </div>
      <div className={classes.item}>
        <p>
          Punto de Rocío <span className={classes.value}>{dewpoint}</span>°C
        </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
