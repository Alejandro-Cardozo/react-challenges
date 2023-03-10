// Hooks
import { useEffect, useState } from 'react'
// Icons
import { BsMusicNoteBeamed } from 'react-icons/bs'
// Helpers
import { formatTime } from '../helpers/helpers'
// Styles
import classes from './ListTrackItem.module.css'
import SoundBars from './SoundBars'

const ListTrackItem = ({
  track,
  index,
  handleSelected,
  trackIndex,
  isPlaying
}) => {
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = document.createElement('audio')
    audio.src = track.src
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })
  }, [formatTime, track.src])

  return (
    <li className={classes.trackItem} onClick={() => handleSelected(index)}>
      <div className={classes['audio-image']}>
        {track.thumbnail
          ? (
            <div>
              <img src={track.thumbnail} alt={track.title} />
              {index === trackIndex && (
                <div className={classes.overlay}>
                  <SoundBars isPlaying={isPlaying} />
                </div>
              )}
            </div>
            )
          : (
            <div className={classes['icon-wrapper']}>
              <span className={classes['audio-icon']}>
                {index === trackIndex
                  ? (
                    <SoundBars isPlaying={isPlaying} />
                    )
                  : (
                    <BsMusicNoteBeamed />
                    )}
              </span>
            </div>
            )}
      </div>
      <div className={classes.info}>
        <h3 className={index === trackIndex ? classes.playing : ''}>
          {track.title}
        </h3>
        <p>{track.author}</p>
      </div>
      <p className={classes.duration}>{formatTime(duration)}</p>
    </li>
  )
}

export default ListTrackItem
