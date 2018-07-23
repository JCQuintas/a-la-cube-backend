const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [RECIPE_HELPER(3, ['FO']), RECIPE_HELPER(2, ['BI'])],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['FO']),
      RECIPE_HELPER(2, ['BI']),
      RECIPE_HELPER(1, ['IC']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(2, ['BI']),
      RECIPE_HELPER(2, ['IC']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [RECIPE_HELPER(2, ['BI']), RECIPE_HELPER(3, ['IC'])],
  },
]
