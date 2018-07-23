const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(2, ['HO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['TI', 'BL', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['BI', 'IC', 'BA']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['RA']),
    ],
  },
]
