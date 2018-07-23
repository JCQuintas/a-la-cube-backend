const { POKENAME } = require('pokemon')
const { ATTRACTED_HELPER } = require('utils')

module.exports = {
  basic: [],
  good: [
    ATTRACTED_HELPER(POKENAME.PARAS, 0.964),
    ATTRACTED_HELPER(POKENAME.VENONAT, 0.024),
  ],
  very_good: [
    ATTRACTED_HELPER(POKENAME.PARAS, 0.575),
    ATTRACTED_HELPER(POKENAME.VENONAT, 0.287),
    ATTRACTED_HELPER(POKENAME.PINSIR, 0.069),
    ATTRACTED_HELPER(POKENAME.SCYTHER, 0.069),
  ],
  special: [
    ATTRACTED_HELPER(POKENAME.VENONAT, 0.676),
    ATTRACTED_HELPER(POKENAME.PINSIR, 0.162),
    ATTRACTED_HELPER(POKENAME.SCYTHER, 0.162),
  ],
}