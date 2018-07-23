const { POKENAME } = require('pokemon')
const { ATTRACTED_HELPER } = require('utils')

module.exports = {
  basic: [ATTRACTED_HELPER(POKENAME.ABRA, 1.0)],
  good: [
    ATTRACTED_HELPER(POKENAME.EXEGGCUTE, 0.488),
    ATTRACTED_HELPER(POKENAME.SLOWPOKE, 0.488),
    ATTRACTED_HELPER(POKENAME.DROWZEE, 0.02),
  ],
  very_good: [
    ATTRACTED_HELPER(POKENAME.EXEGGCUTE, 0.333),
    ATTRACTED_HELPER(POKENAME.SLOWPOKE, 0.333),
    ATTRACTED_HELPER(POKENAME.DROWZEE, 0.267),
    ATTRACTED_HELPER(POKENAME.JYNX, 0.033),
    ATTRACTED_HELPER(POKENAME.MR_MIME, 0.033),
  ],
  special: [],
}
