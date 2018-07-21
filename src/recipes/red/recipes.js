const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['TI']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['BI']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(2, ['BI']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(3, ['BI']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(4, ['BI']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['BR']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
]
