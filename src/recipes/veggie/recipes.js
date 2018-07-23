const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['AP']),
      RECIPE_HELPER(1, ['BI']),
      RECIPE_HELPER(1, ['TI', 'BL']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['AP']),
      RECIPE_HELPER(2, ['BI']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['AP']),
      RECIPE_HELPER(1, ['BI']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['AP']),
      RECIPE_HELPER(2, ['BI']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(3, ['BI']),
      RECIPE_HELPER(1, ['BL', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(3, ['BI']),
      RECIPE_HELPER(1, ['IC', 'HO', 'BA']),
    ],
  },
]
