import classes from './ListTrackItem.module.css'

const ListTrackItem = ({ track }) => {
  return (
    <li className={classes.trackItem}>
      <img src={track.thumbnail} alt={track.title} />
      <div>
        <h3>{track.title}</h3>
        <p>{track.author}</p>
      </div>
      <p>00:00</p>
    </li>
  )
}

export default ListTrackItem