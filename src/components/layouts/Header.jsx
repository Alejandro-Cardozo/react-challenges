// Styles
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.items}>
        <div className={classes.logo}>MyWeather</div>
        <select className={classes.select} name='city' id='city'>
          <option value='city 1'>city 1</option>
          <option value='city 2'>city 2</option>
          <option value='city 3'>city 3</option>
          <option value='city 4'>city 4</option>
          <option value='city 5'>city 5</option>
          <option value='city 6'>city 6</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
