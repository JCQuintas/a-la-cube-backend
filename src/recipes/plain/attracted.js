const { POKENAME } = require('pokemon')
const { ATTRACTED_HELPER } = require('utils')

module.exports = {
  basic: [
    ATTRACTED_HELPER(POKENAME.MEOWTH, 0.25),
    ATTRACTED_HELPER(POKENAME.PIDGEY, 0.25),
    ATTRACTED_HELPER(POKENAME.RATTATA, 0.25),
    ATTRACTED_HELPER(POKENAME.SPEAROW, 0.25),
  ],
  good: [
    ATTRACTED_HELPER(POKENAME.DODUO, 0.245),
    ATTRACTED_HELPER(POKENAME.JIGGLYPUFF, 0.245),
    ATTRACTED_HELPER(POKENAME.LICKITUNG, 0.245),
    ATTRACTED_HELPER(POKENAME.PORYGON, 0.245),
  ],
  very_good: [
    ATTRACTED_HELPER(POKENAME.DODUO, 0.181),
    ATTRACTED_HELPER(POKENAME.FARFETCH_D, 0.081),
    ATTRACTED_HELPER(POKENAME.JIGGLYPUFF, 0.181),
    ATTRACTED_HELPER(POKENAME.LICKITUNG, 0.181),
    ATTRACTED_HELPER(POKENAME.PORYGON, 0.181),
    ATTRACTED_HELPER(POKENAME.KANGASKHAN, 0.09),
    ATTRACTED_HELPER(POKENAME.EEVEE, 0.063),
    ATTRACTED_HELPER(POKENAME.CHANSEY, 0.011),
    ATTRACTED_HELPER(POKENAME.DITTO, 0.011),
    ATTRACTED_HELPER(POKENAME.SNORLAX, 0.011),
    ATTRACTED_HELPER(POKENAME.TAUROS, 0.011),
  ],
  special: [
    ATTRACTED_HELPER(POKENAME.KANGASKHAN, 0.325),
    ATTRACTED_HELPER(POKENAME.FARFETCH_D, 0.292),
    ATTRACTED_HELPER(POKENAME.EEVEE, 0.227),
    ATTRACTED_HELPER(POKENAME.CHANSEY, 0.039),
    ATTRACTED_HELPER(POKENAME.DITTO, 0.039),
    ATTRACTED_HELPER(POKENAME.SNORLAX, 0.039),
    ATTRACTED_HELPER(POKENAME.TAUROS, 0.039),
  ],
}
