// Components
import PlayControls from './PlayControls'
import VolumeControl from './VolumeControl'

// Styles
import classes from './Controls.module.css'
const Controls = ({
  audioRef,
  volumeBarRef,
  handleNext,
  handlePrevious,
  isPlaying,
  setIsPlaying
}) => {
  return (
    <div className={classes['controls-wrapper']}>
      <PlayControls
        {...{
          audioRef,
          handlePrevious,
          handleNext,
          isPlaying,
          setIsPlaying
        }}
      />
      <VolumeControl {...{ audioRef, volumeBarRef }} />
    </div>
  )
}

export default Controls
