const { POKENAME } = require('pokemon')
const { ATTRACTED_HELPER } = require('utils')

module.exports = {
  basic: [],
  good: [
    ATTRACTED_HELPER(POKENAME.DODUO, 0.492),
    ATTRACTED_HELPER(POKENAME.ZUBAT, 0.492),
    ATTRACTED_HELPER(POKENAME.FARFETCHE_D, 0.011),
  ],
  very_good: [
    ATTRACTED_HELPER(POKENAME.DODUO, 0.382),
    ATTRACTED_HELPER(POKENAME.ZUBAT, 0.382),
    ATTRACTED_HELPER(POKENAME.FARFETCHE_D, 0.172),
    ATTRACTED_HELPER(POKENAME.SCYTHER, 0.046),
    ATTRACTED_HELPER(POKENAME.AERODACTYL, 0.019),
  ],
  special: [
    ATTRACTED_HELPER(POKENAME.FARFETCHE_D, 0.726),
    ATTRACTED_HELPER(POKENAME.SCYTHER, 0.194),
    ATTRACTED_HELPER(POKENAME.AERODACTYL, 0.081),
  ],
}
