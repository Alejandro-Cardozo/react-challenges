// Styles
import classes from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={classes.progress}>
      <span className='time current'>00:00</span>
      <input type='range' />
      <span className='time'>03:34</span>
    </div>
  );
};

export default ProgressBar;
