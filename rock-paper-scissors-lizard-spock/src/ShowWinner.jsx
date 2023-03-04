function ShowWinner ({ winner = 0 }) {
  const text = {
    '-1': 'You Lose!',
    0: "It's a Tie!",
    1: 'You Win!'
  }

  return <h2>{text[winner]}</h2>
}

export default ShowWinner
