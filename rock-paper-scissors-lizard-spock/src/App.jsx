import './App.css'

function App() {
  return (
    <div className='center'>
      <h1>¡Rock, Paper, Scissors, Lizard, Spock!</h1>
      <div>
        <div className='container'>
          <div className='player'>
            <div className='score'>Player 1: 0</div>
            <div className='action player-one'>✊🏻</div>
          </div>
          <div className='player'>
            <div className='score'>Player 2: 0</div>
            <div className='action player-two'>🖖🏻</div>
          </div>
        </div>
        <div>
          <button className='round-btn'>✊🏻</button>
          <button className='round-btn'>✋🏻</button>
          <button className='round-btn'>✌🏻</button>
          <button className='round-btn'>🤌🏻</button>
          <button className='round-btn'>🖖🏻</button>
        </div>
        <h2>Player 1 Wins!</h2>
      </div>
    </div>
  )
}

export default App
