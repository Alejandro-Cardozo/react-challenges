import PlayControls from './PlayControls'
import VolumeControl from './VolumeControl'

const Controls = ({
  audioRef,
  volumeBarRef,
  handleNext,
  handlePrevious,
  isPlaying,
  setIsPlaying
}) => {
  return (
    <div className='controls-wrapper'>
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
