const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['FO']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['FO']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['FO']),
      RECIPE_HELPER(2, ['BA']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(3, ['BA']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(4, ['BA']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['BA']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
]
