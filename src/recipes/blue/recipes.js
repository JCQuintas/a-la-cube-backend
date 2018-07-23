const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['BL']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['BL']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(2, ['IC']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(3, ['IC']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(4, ['IC']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['IC']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
]
