// Rock, paper, scissors, lizard and spock icons
export const icons = {
  '': '',
  rock: '✊🏻',
  paper: '✋🏻',
  scissors: '✌🏻',
  lizard: '🤌🏻',
  spock: '🖖🏻'
}

// Rules of the game
export const rules = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors']
}

// Result of the game texts and icons
export const text = {
  '-1': { icon: '🤜🏻', result: "It's a Tie" },
  0: { icon: '👇🏻', result: 'Select your weapon' },
  1: { icon: '💪🏻', result: 'You Win' },
  2: { icon: '🦾', result: 'You Lose' }
}
