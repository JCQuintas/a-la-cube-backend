const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(2, ['HO']),
      RECIPE_HELPER(1, ['TI', 'BL']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(2, ['HO']),
      RECIPE_HELPER(1, ['TI', 'BL']),
      RECIPE_HELPER(1, ['BI', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['TI', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(2, ['HO']),
      RECIPE_HELPER(2, ['BI', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['BI', 'BA', 'IC']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['BI']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['BI', 'IC']),
      RECIPE_HELPER(1, ['BI', 'BA']),
    ],
  },
]
