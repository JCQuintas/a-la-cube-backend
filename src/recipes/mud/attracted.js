const { POKENAME } = require('pokemon')
const { ATTRACTED_HELPER } = require('utils')

module.exports = {
  basic: [
    ATTRACTED_HELPER(POKENAME.GEODUDE, 0.33),
    ATTRACTED_HELPER(POKENAME.RHYHORN, 0.33),
    ATTRACTED_HELPER(POKENAME.SANDSHREW, 0.33),
  ],
  good: [
    ATTRACTED_HELPER(POKENAME.DIGLET, 0.488),
    ATTRACTED_HELPER(POKENAME.ONIX, 0.488),
    ATTRACTED_HELPER(POKENAME.CUBONE, 0.024),
  ],
  very_good: [
    ATTRACTED_HELPER(POKENAME.CUBONE, 0.33),
    ATTRACTED_HELPER(POKENAME.DIGLET, 0.33),
    ATTRACTED_HELPER(POKENAME.ONIX, 0.33),
  ],
  special: [ATTRACTED_HELPER(POKENAME.CUBONE, 1.0)],
}
