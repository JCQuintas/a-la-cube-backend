const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(2, ['BA']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(2, ['BA']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(1, ['BL', 'AP']),
      RECIPE_HELPER(3, ['BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(3, ['BA']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(3, ['BA']),
      RECIPE_HELPER(1, ['RA']),
    ],
  },
]
