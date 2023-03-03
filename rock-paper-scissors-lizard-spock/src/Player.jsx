import icons from './icons'

function Player ({ id = 1, name = 'Player', score = 0, action = 'rock' }) {
  const actionClasses = id === 1 ? 'action player-one' : 'action player-two'
  return (
    <div className='player'>
      <div className='score'>
        {name}: {score}
      </div>
      <div className={actionClasses}>{icons[action]}</div>
    </div>
  )
}

export default Player
