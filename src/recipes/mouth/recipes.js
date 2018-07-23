const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['BL']),
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(1, ['TI', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['BL']),
      RECIPE_HELPER(1, ['TI', 'AP', 'FO']),
      RECIPE_HELPER(1, ['BI', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['IC']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['BL']),
      RECIPE_HELPER(2, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(1, ['BI', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(2, ['BI', 'HO', 'BA']),
    ],
  },
]
