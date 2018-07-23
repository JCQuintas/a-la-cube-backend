const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['HO']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(2, ['HO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(2, ['HO']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
]
