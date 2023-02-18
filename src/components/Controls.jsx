// Hooks
import { useState, useEffect} from 'react';
import useVolume from '../hooks/useVolume';

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
  IoVolumeLow,
} from 'react-icons/io5';

// Styles
import classes from './Controls.module.css';

const Controls = ({
  audioRef,
  volumeBarRef,
  handleNext,
  handlePrevious,
  isPlaying,
  setIsPlaying
}) => {
  const [volume, muteVolume, handleVolumeChange, setMuteVolume] = useVolume(audioRef)

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  useEffect(() => {
    volumeBarRef.current.style.setProperty(
      '--range-volume',
      `${volume}%`
    );
  }, [volume, volumeBarRef])

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;

    }
  }, [volume, audioRef, muteVolume]);

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
          {muteVolume || volume < 5 ? (
            <IoVolumeOff />
          ) : volume < 35 ? (
            <IoVolumeLow />
          ) : volume < 75 ? (
            <IoVolumeMedium />
          ) : (
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
  );
};

export default Controls;
