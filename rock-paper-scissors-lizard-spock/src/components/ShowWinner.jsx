// Data
import { text } from '../data/data'

function ShowWinner ({ winner = 0 }) {
  return (
    <h2>
      <div style={{ display: 'inline-block' }}>{text[winner].icon}</div>
      {` ${text[winner].result} `}
      <div style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>{text[winner].icon}</div>
    </h2>
  )
}

export default ShowWinner
