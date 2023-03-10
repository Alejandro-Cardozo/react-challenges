// Data
import { tracks } from '../data/tracks'
// Components
import ListTrackItem from './ListTrackItem'
// Styles
import classes from './TrackList.module.css'

const TrackList = ({ handleSelected }) => {
  return (
    <section className={classes.listSection}>
      <ul className={classes.list}>
        {tracks.map((track, index) => (
          <ListTrackItem key={track.id} track={track} index={index} handleSelected={handleSelected} />
        ))}
      </ul>
    </section>
  )
}

export default TrackList
