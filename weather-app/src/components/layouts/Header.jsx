// Styles
import classes from './Header.module.css';

const Header = ({ OnSelectCity }) => {
  return (
    <div className={classes.header}>
      <div className={classes.items}>
        <h3 className={classes.logo}>MyWeather</h3>
        <select
          onChange={(e) => OnSelectCity(e.target.value)}
          className={classes.select}
          name='city'
          id='city'
        >
          <option value='posadas'>Posadas</option>
          <option value='corrientes'>Corrientes</option>
          <option value='resistencia'>Resistencia</option>
          <option value='formosa'>Formosa</option>
          <option value='parana'>Paraná</option>
          <option value='rosario'>Rosario</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
