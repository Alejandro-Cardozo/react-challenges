import icons from './icons'

function Player({ id = 1, name = 'Player', score = 0, action = 'rock' }) {
  const action_classes = id === 1 ? 'action player-one' : 'action player-two'
  return (
    <div className='player'>
      <div className='score'>
        {name}: {score}
      </div>
      <div className={action_classes}>{icons[action]}</div>
    </div>
  )
}

export default Player
