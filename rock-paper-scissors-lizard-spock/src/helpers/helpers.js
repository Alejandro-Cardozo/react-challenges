/**
 * Returns a winner based on the players input
 *
 * @param {string} action1 Human player input.
 * @param {string} action2 Computer player input.
 * @param {Object} rules rules of the game
 * @return {number} winner of the game (1: player, 2: cpu, -1: tie).
 */
export function selectWinner (action1, action2, rules) {
  if (action1 === action2) {
    return -1
  } else if (rules[action1].includes(action2)) {
    return 1
  } else if (rules[action2].includes(action1)) {
    return 2
  } else {
    return null
  }
}

/**
 * Returns the computer selected move
 *
 * @param {Object} rules rules of the game
 * @return {number} A random move from the rules keys
 */
export function randomAction (rules) {
  const keys = Object.keys(rules)
  const index = Math.floor(Math.random() * keys.length)

  return keys[index]
}
