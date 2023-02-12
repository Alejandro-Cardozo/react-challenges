// Components
import SimpleCardWeather from './SimpleCardWeather';

// Styles
import classes from './NextDaysWeather.module.css';

const NextDaysWeather = ({ nextDays }) => {
  if (!nextDays) {
    return <p className={classes.main}>Cargando...</p>;
  }

  return (
    <div>
      {nextDays.time.map((time, i) => (
        <SimpleCardWeather
          key={time}
          day={time}
          max_temp={nextDays.temperature_2m_max[i]}
          min_temp={nextDays.temperature_2m_min[i]}
          precipitation_sum={nextDays.precipitation_sum[i]}
        />
      )).slice(1)}
    </div>
  );
};

export default NextDaysWeather;
