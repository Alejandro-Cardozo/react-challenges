// Data
import { tracks } from '../data/tracks'
// Components
import ListTrackItem from './ListTrackItem'
// Styles
import classes from './TrackList.module.css'

const TrackList = ({ handleSelected, trackIndex, isPlaying }) => {
  return (
    <section className={classes.listSection}>
      <ul className={classes.list}>
        {tracks.map((track, index) => (
          <ListTrackItem
            key={track.id}
            track={track}
            index={index}
            handleSelected={handleSelected}
            trackIndex={trackIndex}
            isPlaying={isPlaying}
          />
        ))}
      </ul>
    </section>
  )
}

export default TrackList
