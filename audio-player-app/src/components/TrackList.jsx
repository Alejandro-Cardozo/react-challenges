import { tracks } from '../data/tracks'
import ListTrackItem from './ListTrackItem'

import classes from './TrackList.module.css'

const TrackList = () => {

  return (
    <section className={classes.listSection}>
      <ul className={classes.list}>
        {tracks.map((track) => (
          <ListTrackItem key={track.id} track={track} />
        ))}
      </ul>
    </section>
  )
}

export default TrackList
