import { useRef, useState } from 'react'
import useTrack from '../hooks/useTrack'
import { tracks } from '../../data/tracks'
import usePlayAnimation from '../hooks/usePlayingAnimation'

// Components
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import usePlayTrack from '../hooks/usePlayTrack'

// Styles
import classes from './AudioPlayer.module.css'

const AudioPlayer = () => {
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef()
  const progressBarRef = useRef()
  const volumeBarRef = useRef()

  const [currentTrack, handleNext, handlePrevious] = useTrack(tracks)

  usePlayAnimation(audioRef, progressBarRef, duration, setTimeProgress)
  usePlayTrack(isPlaying, audioRef, currentTrack)

  return (
    <div className={classes['audio-player']}>
      <div className={classes.inner}>
        <DisplayTrack
          {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }}
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
