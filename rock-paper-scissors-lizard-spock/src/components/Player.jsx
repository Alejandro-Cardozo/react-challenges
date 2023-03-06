// Data
import { icons } from '../data/data'

// Styles
import classes from './Player.module.css'

function Player ({ id = 1, name = 'Player', score = 0, action = 'rock' }) {
  const actionClasses =
    id === 1
      ? `${classes.action} ${classes['player-one']}`
      : `${classes.action} ${classes['player-two']}`
  return (
    <div className={classes.player}>
      <div className={classes.score}>
        {name}: {score}
      </div>
      {icons[action]
        ? (
          <div className={actionClasses}>{icons[action] || '👈🏻'}</div>
          )
        : (
          <div className={classes.action}>❔</div>
          )}
    </div>
  )
}

export default Player
