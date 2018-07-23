const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [RECIPE_HELPER(3, ['BL']), RECIPE_HELPER(2, ['FO'])],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(2, ['FO']),
      RECIPE_HELPER(1, ['HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(1, ['HO']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(2, ['FO']),
      RECIPE_HELPER(2, ['HO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['BL']),
      RECIPE_HELPER(1, ['HO']),
      RECIPE_HELPER(2, ['BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(2, ['HO']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [RECIPE_HELPER(2, ['FO']), RECIPE_HELPER(3, ['HO'])],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(3, ['HO']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['BL']),
      RECIPE_HELPER(2, ['HO']),
      RECIPE_HELPER(2, ['BA']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [RECIPE_HELPER(3, ['HO']), RECIPE_HELPER(2, ['BA'])],
  },
]
