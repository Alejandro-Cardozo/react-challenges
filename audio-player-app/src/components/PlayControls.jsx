// Icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp
} from 'react-icons/io5'

// Styles
import classes from './PlayControls.module.css'

const PlayControls = ({
  audioRef,
  handlePrevious,
  handleNext,
  isPlaying,
  setIsPlaying
}) => {
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const skipForward = () => {
    audioRef.current.currentTime += 15
  }

  const skipBackward = () => {
    audioRef.current.currentTime -= 15
  }
  return (
    <div className={classes.controls}>
      <button onClick={handlePrevious}>
        <IoPlaySkipBackSharp />
      </button>
      <button onClick={skipBackward}>
        <IoPlayBackSharp />
      </button>

      <button onClick={togglePlayPause} id='play'>
        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
      </button>
      <button onClick={skipForward}>
        <IoPlayForwardSharp />
      </button>
      <button onClick={handleNext}>
        <IoPlaySkipForwardSharp />
      </button>
    </div>
  )
}

export default PlayControls
