// Hooks
import { useEffect } from 'react'
import useVolume from '../hooks/useVolume'

// Icons
import {
  IoVolumeHigh,
  IoVolumeOff,
  IoVolumeMedium,
  IoVolumeLow
} from 'react-icons/io5'

// Styles
import classes from './VolumeControl.module.css'

const VolumeControl = ({ audioRef, volumeBarRef }) => {
  const [volume, muteVolume, handleVolumeChange, setMuteVolume] =
    useVolume(audioRef)

  useEffect(() => {
    volumeBarRef.current.style.setProperty('--range-volume', `${volume}%`)
  }, [volume, volumeBarRef])

  return (
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
  )
}

export default VolumeControl
