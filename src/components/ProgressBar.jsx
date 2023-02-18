// Styles
import classes from './ProgressBar.module.css'

// Helpers
import { formatTime } from '../helpers/helpers'

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
  }

  return (
    <div className={classes.progress}>
      <span className='time current'>{formatTime(timeProgress)}</span>
      <input
        type='range'
        ref={progressBarRef}
        defaultValue='0'
        onChange={handleProgressChange}
      />
      <span className='time'>{formatTime(duration)}</span>
    </div>
  )
}

export default ProgressBar
