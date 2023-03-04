import { useState } from 'react'

import Player from './Player'
import ActionButton from './ActionButton'
import ShowWinner from './ShowWinner'

import './App.css'
import Button3D from './Button3D'

import spock from './images/spock1.avif'
import paper from './images/paper1.avif'
import scissors from './images/scissors1.avif'
import rock from './images/rock1.avif'
import lizard from './images/lizard1.avif'
import spockFallback from './images/spock1.webp'
import paperFallback from './images/paper1.webp'
import scissorsFallback from './images/scissors1.webp'
import rockFallback from './images/rock1.webp'
import lizardFallback from './images/lizard1.webp'

const rules = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors']
}

function randomAction () {
  const keys = Object.keys(rules)
  const index = Math.floor(Math.random() * keys.length)

  return keys[index]
}

function selectWinner (action1, action2) {
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

function App () {
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
        <div>
          <ActionButton action='rock' onActionSelected={onActionSelected} />
          <ActionButton action='paper' onActionSelected={onActionSelected} />
          <ActionButton action='scissors' onActionSelected={onActionSelected} />
          <ActionButton action='lizard' onActionSelected={onActionSelected} />
          <ActionButton action='spock' onActionSelected={onActionSelected} />
        </div>
        <ShowWinner winner={winner} />
      </div>
      <div className="buttons">
        <Button3D image={rock} fallbackImage={rockFallback} text='Rock' />
        <Button3D image={paper} fallbackImage={paperFallback} text='Paper' />
        <Button3D image={scissors} fallbackImage={scissorsFallback} text='Scissors' />
        <Button3D image={lizard} fallbackImage={lizardFallback} text='Lizard' />
        <Button3D image={spock} fallbackImage={spockFallback} text='Spock' />
      </div>
    </div>
  )
}

export default App
