const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['BL']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(1, ['AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(1, ['HO']),
      RECIPE_HELPER(1, ['AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(1, ['HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(2, ['HO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(2, ['HO']),
    ],
  },
]
