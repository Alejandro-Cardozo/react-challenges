// Hooks
import { useState, useEffect, useCallback, useRef } from 'react'

// Icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
  IoVolumeHigh,
  IoVolumeOff,
  IoVolumeMedium,
  IoVolumeLow
} from 'react-icons/io5'

// Styles
import classes from './Controls.module.css'

const Controls = ({
  audioRef,
  progressBarRef,
  volumeBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(60)
  const [muteVolume, setMuteVolume] = useState(false)

  const playAnimationRef = useRef()

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime
    setTimeProgress(currentTime)
    progressBarRef.current.value = currentTime
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    )

    playAnimationRef.current = window.requestAnimationFrame(repeat)
  }, [audioRef, duration, progressBarRef, setTimeProgress])

  const skipForward = () => {
    audioRef.current.currentTime += 15
  }

  const skipBackward = () => {
    audioRef.current.currentTime -= 15
  }

  const handlePrevious = () => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1
      setTrackIndex(lastTrackIndex)
      setCurrentTrack(tracks[lastTrackIndex])
    } else {
      setTrackIndex((prev) => prev - 1)
      setCurrentTrack(tracks[trackIndex - 1])
    }
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }

  useEffect(() => {
    volumeBarRef.current.style.setProperty(
      '--range-volume',
      `${volume}%`
    )
  }, [volume, volumeBarRef])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    playAnimationRef.current = window.requestAnimationFrame(repeat)
  }, [isPlaying, audioRef, repeat])

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
      audioRef.current.muted = muteVolume
    }
  }, [volume, audioRef, muteVolume])

  return (
    <div className='controls-wrapper'>
      <div className='controls'>
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={skipForward}>
          <IoPlayForwardSharp />
        </button>
        <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
      <div className={classes.volume}>
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5
            ? (
              <IoVolumeOff />
              )
            : volume < 35
              ? (
                <IoVolumeLow />
                )
              : volume < 75
                ? (
                  <IoVolumeMedium />
                  )
                : (
                  <IoVolumeHigh />
                  )}
        </button>
        <input
          type='range'
          min={0}
          max={100}
          value={volume}
          ref={volumeBarRef}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default Controls
