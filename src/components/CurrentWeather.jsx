// Components
import WeatherDetails from "./WeatherDetails";

const CurrentWeather = ({ forecast, city }) => {
  return (
    <div>
      <h3>{city}</h3>
      <p>Icon</p>
      {forecast && <p>Temperature: {forecast.hourly?.temperature_2m[0]}°C</p>}
      <p>celcius</p>
      <p>description</p>
      <WeatherDetails />
    </div>
  )
}

export default CurrentWeather;