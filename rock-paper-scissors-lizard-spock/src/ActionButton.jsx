import icons from './icons'

function ActionButton({ action }) {
  return <button className='round-btn'>{icons[action]}</button>
}

export default ActionButton
