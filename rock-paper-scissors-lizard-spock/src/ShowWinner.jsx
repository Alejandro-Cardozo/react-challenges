function ShowWinner({ winner = 0 }) {
  const text = {
    '-1': (
      <h2>
        <div style={{ display: 'inline-block' }}>🦾</div> You lose{' '}
        <div style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🦾</div>
      </h2>
    ),
    0: (
      <h2>
        <div style={{ display: 'inline-block' }}>🤜🏻</div> It's a Tie{' '}
        <div style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🤜🏻</div>
      </h2>
    ),
    1: (
      <h2>
        <div style={{ display: 'inline-block' }}>💪🏻</div> You Win{' '}
        <div style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>💪🏻</div>
      </h2>
    )
  }

  return <>{text[winner]}</>
}

export default ShowWinner
