const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['MY']),
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(1, ['FO']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['MY']),
      RECIPE_HELPER(1, ['BI']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(1, ['HO']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
]
