import { useRef, useState } from 'react'
import usePlayAnimation from '../hooks/usePlayingAnimation'

// Components
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import usePlayTrack from '../hooks/usePlayTrack'

// Styles
import classes from './AudioPlayer.module.css'

const AudioPlayer = ({ currentTrack, handleNext, handlePrevious, isPlaying, setIsPlaying }) => {
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef()
  const progressBarRef = useRef()
  const volumeBarRef = useRef()

  usePlayAnimation(audioRef, progressBarRef, duration, setTimeProgress)
  usePlayTrack(isPlaying, audioRef, currentTrack)

  return (
    <div className={classes['audio-player']}>
      <div className={classes.inner}>
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext
          }}
        />{' '}
        <Controls
          {...{
            audioRef,
            volumeBarRef,
            handleNext,
            handlePrevious,
            isPlaying,
            setIsPlaying
          }}
        />
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
    </div>
  )
}
export default AudioPlayer
