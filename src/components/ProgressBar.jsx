// Styles
import classes from './ProgressBar.module.css';

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className={classes.progress}>
      <span className='time current'>{timeProgress}</span>{' '}
      <input
        type='range'
        ref={progressBarRef}
        defaultValue='0'
        onChange={handleProgressChange}
      />
      <span className='time'>{duration}</span>
    </div>
  );
};

export default ProgressBar;
