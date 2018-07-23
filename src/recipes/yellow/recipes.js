const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['AP']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['AP']),
      RECIPE_HELPER(1, ['HO']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['AP']),
      RECIPE_HELPER(2, ['HO']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(4, ['HO']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['HO']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
]
