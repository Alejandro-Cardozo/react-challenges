import { useState } from 'react'

import Player from './Player'
import ActionButton from './ActionButton'
import ShowWinner from './ShowWinner'

import './App.css'
import Button3D from './Button3D'

import { images } from './images'

const rules = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors']
}

function randomAction() {
  const keys = Object.keys(rules)
  const index = Math.floor(Math.random() * keys.length)

  return keys[index]
}

function selectWinner(action1, action2) {
  if (action1 === action2) {
    return 0
  } else if (rules[action1].includes(action2)) {
    return 1
  } else if (rules[action2].includes(action1)) {
    return -1
  } else {
    return null
  }
}

function App() {
  const [playerAction, setPlayerAction] = useState('')
  const [playerScore, setPlayerScore] = useState(0)
  const [computerAction, setComputerAction] = useState('')
  const [computerScore, setComputerScore] = useState(0)
  const [winner, setWinner] = useState('')

  const onActionSelected = (selectedAction) => {
    const computerAction = randomAction()

    setPlayerAction(selectedAction)
    setComputerAction(computerAction)

    const newWinner = selectWinner(selectedAction, computerAction)
    setWinner(newWinner)
    if (newWinner > 0) {
      setPlayerScore((prev) => prev + 1)
    } else if (newWinner < 0) {
      setComputerScore((prev) => prev + 1)
    }
  }

  return (
    <div className='center'>
      <h1>¡Rock, Paper, Scissors, Lizard, Spock!</h1>
      <div>
        <div className='container'>
          <Player id={1} name='Player 1' score={playerScore} action={playerAction} />
          <Player id={2} name='Computer' score={computerScore} action={computerAction} />
        </div>
        <ShowWinner winner={winner} />
      </div>
      <div className='buttons'>
        {images.map((img) => (
          <Button3D
            id={img.id}
            image={img.image}
            fallbackImage={img.fallbackImage}
            text={img.title}
            onActionSelected={onActionSelected}
          />
        ))}
      </div>
    </div>
  )
}

export default App
