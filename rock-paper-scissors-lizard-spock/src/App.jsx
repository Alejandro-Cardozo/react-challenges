import Player from './Player'
import ActionButton from './ActionButton'

import './App.css'

function App() {
  return (
    <div className='center'>
      <h1>¡Rock, Paper, Scissors, Lizard, Spock!</h1>
      <div>
        <div className='container'>
          <Player id={1} name={'Player 1'} score={0} action='spock' />
          <Player id={2} name={'Computer'} score={0} action='scissors' />
        </div>
        <div>
          <ActionButton action='rock' />
          <ActionButton action='paper' />
          <ActionButton action='scissors' />
          <ActionButton action='lizard' />
          <ActionButton action='spock' />
        </div>
        <h2>Player 1 Wins!</h2>
      </div>
    </div>
  )
}

export default App
