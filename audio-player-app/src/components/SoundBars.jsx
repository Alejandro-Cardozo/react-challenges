import classes from './SoundBars.module.css'

const SoundBars = ({ isPlaying }) => {
  console.log(isPlaying)
  const barsStyle = isPlaying ? classes.icon : `${classes.icon} ${classes.paused}`
  return (
    <div className={barsStyle}>
      <span />
      <span />
      <span />
    </div>
  )
}

export default SoundBars
