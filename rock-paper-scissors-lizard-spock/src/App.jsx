// Hooks
import { useState } from 'react'
// Components
import Player from './components/Player'
import ShowWinner from './components/ShowWinner'
import Button3D from './components/Button3D'
// Helpers and data
import { images } from './images'
import { rules } from './data/data'
import { selectWinner, randomAction } from './helpers/helpers'
// Styles
import classes from './App.module.css'

function App() {
  const [playerAction, setPlayerAction] = useState('default')
  const [playerScore, setPlayerScore] = useState(0)
  const [computerAction, setComputerAction] = useState('default')
  const [computerScore, setComputerScore] = useState(0)
  const [winner, setWinner] = useState(0)

  const onActionSelected = (selectedAction) => {
    const computerAction = randomAction(rules)

    setPlayerAction(selectedAction)
    setComputerAction(computerAction)

    const newWinner = selectWinner(selectedAction, computerAction, rules)
    setWinner(newWinner)
    if (newWinner === 1) {
      setPlayerScore((prev) => prev + 1)
    } else if (newWinner === 2) {
      setComputerScore((prev) => prev + 1)
    }
  }

  return (
    <div className={classes.center}>
      <h1>¡Rock, Paper, Scissors, Lizard, Spock!</h1>
      <div>
        <div className={classes.container}>
          <Player id={1} name='You' score={playerScore} action={playerAction} />
          <Player id={2} name='Computer' score={computerScore} action={computerAction} />
        </div>
      </div>
      <ShowWinner winner={winner} />
      <div className={classes.buttons}>
        {images.map((img) => (
          <Button3D
            key={img.id}
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
