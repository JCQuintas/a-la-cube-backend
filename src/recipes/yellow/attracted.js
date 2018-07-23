const { POKENAME } = require('pokemon')
const { ATTRACTED_HELPER } = require('utils')

module.exports = {
  basic: [
    ATTRACTED_HELPER(POKENAME.ABRA, 0.125),
    ATTRACTED_HELPER(POKENAME.BELLSPROUT, 0.125),
    ATTRACTED_HELPER(POKENAME.MEOWTH, 0.125),
    ATTRACTED_HELPER(POKENAME.PIDGEY, 0.125),
    ATTRACTED_HELPER(POKENAME.PSYDUCK, 0.125),
    ATTRACTED_HELPER(POKENAME.SANDSHREW, 0.125),
    ATTRACTED_HELPER(POKENAME.STARYU, 0.125),
    ATTRACTED_HELPER(POKENAME.WEEDLE, 0.125),
  ],
  good: [
    ATTRACTED_HELPER(POKENAME.PONYTA, 0.919),
    ATTRACTED_HELPER(POKENAME.BULBASAUR, 0.015),
    ATTRACTED_HELPER(POKENAME.DROWZEE, 0.015),
    ATTRACTED_HELPER(POKENAME.PIKACHU, 0.015),
    ATTRACTED_HELPER(POKENAME.HITMONLEE, 0.012),
    ATTRACTED_HELPER(POKENAME.KANGASKHAN, 0.012),
  ],
  very_good: [
    ATTRACTED_HELPER(POKENAME.PONYTA, 0.362),
    ATTRACTED_HELPER(POKENAME.BULBASAUR, 0.12),
    ATTRACTED_HELPER(POKENAME.DROWZEE, 0.12),
    ATTRACTED_HELPER(POKENAME.PIKACHU, 0.12),
    ATTRACTED_HELPER(POKENAME.HITMONLEE, 0.091),
    ATTRACTED_HELPER(POKENAME.KANGASKHAN, 0.091),
    ATTRACTED_HELPER(POKENAME.ELECTABUZZ, 0.033),
    ATTRACTED_HELPER(POKENAME.SCYTHER, 0.033),
    ATTRACTED_HELPER(POKENAME.SNORLAX, 0.033),
  ],
  special: [
    ATTRACTED_HELPER(POKENAME.BULBASAUR, 0.188),
    ATTRACTED_HELPER(POKENAME.DROWZEE, 0.188),
    ATTRACTED_HELPER(POKENAME.PIKACHU, 0.188),
    ATTRACTED_HELPER(POKENAME.HITMONLEE, 0.142),
    ATTRACTED_HELPER(POKENAME.KANGASKHAN, 0.142),
    ATTRACTED_HELPER(POKENAME.ELECTABUZZ, 0.051),
    ATTRACTED_HELPER(POKENAME.SCYTHER, 0.051),
    ATTRACTED_HELPER(POKENAME.SNORLAX, 0.051),
  ],
}
