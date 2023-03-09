import { useEffect, useMemo, useState } from 'react'
import classes from './ListTrackItem.module.css'// Icons
import { BsMusicNoteBeamed } from 'react-icons/bs'
// Helpers
import { formatTime } from '../helpers/helpers'

const ListTrackItem = ({ track }) => {
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = new Audio(track.src)
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })
  }, [formatTime, track.src])

  return (
    <li className={classes.trackItem}>
      {/* <img src={track.thumbnail} alt={track.title} /> */}
      <div className={classes['audio-image']}>
          {track.thumbnail
            ? (
              <img src={track.thumbnail} alt={track.title} />
              )
            : (
              <div className={classes['icon-wrapper']}>
                <span className={classes['audio-icon']}>
                  <BsMusicNoteBeamed />
                </span>
              </div>
              )}
        </div>
      <div className={classes.info}>
        <h3>{track.title}</h3>
        <p>{track.author}</p>
      </div>
      <p className={classes.duration}>{formatTime(duration)}</p>
    </li>
  )
}

export default ListTrackItem
