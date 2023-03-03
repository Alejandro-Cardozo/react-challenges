import icons from './icons'

function ActionButton ({ action = 'rock', onActionSelected }) {
  return (
    <button className='round-btn' onClick={() => onActionSelected(action)}>
      {icons[action]}
    </button>
  )
}

export default ActionButton
