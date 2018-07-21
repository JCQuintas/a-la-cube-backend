const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [RECIPE_HELPER(5, ['TI', 'BL', 'AP', 'FO'])],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(4, ['TI', 'BL', 'AP', 'FO']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['TI', 'BL', 'AP', 'FO']),
      RECIPE_HELPER(2, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['TI', 'BL', 'AP', 'FO']),
      RECIPE_HELPER(3, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['TI', 'BL', 'AP', 'FO']),
      RECIPE_HELPER(4, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [RECIPE_HELPER(5, ['BI', 'IC', 'HO', 'BA'])],
  },
  {
    rarity: 'Special',
    expensive: true,
    ingredients: [RECIPE_HELPER(5, ['RA'])],
  },
]
