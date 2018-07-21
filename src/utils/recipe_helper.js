const INGREDIENTS = require('ingredients')

const mapping = {
  TI: INGREDIENTS.TINY_MUSHROOM,
  BL: INGREDIENTS.BLUK_BERRY,
  AP: INGREDIENTS.APRICORN,
  FO: INGREDIENTS.FOSSIL,
  BI: INGREDIENTS.BIG_ROOT,
  IC: INGREDIENTS.ICY_ROCK,
  HO: INGREDIENTS.HONEY,
  BA: INGREDIENTS.BALM_MUSHROOM,
  RA: INGREDIENTS.RAINBOW_MATTER,
  MY: INGREDIENTS.MYSTIC_SHELL,
}

module.exports = (qty, ingredients) => ({
  amount: qty,
  name: ingredients.map(v => mapping[v.toUpperCase()]),
})
