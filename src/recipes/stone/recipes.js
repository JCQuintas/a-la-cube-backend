const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(2, ['FO']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP']),
      RECIPE_HELPER(1, ['AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(2, ['FO']),
      RECIPE_HELPER(1, ['AP', 'FO']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(1, ['TI', 'BL']),
      RECIPE_HELPER(2, ['AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['AP']),
      RECIPE_HELPER(2, ['FO']),
      RECIPE_HELPER(1, ['BA']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['AP']),
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(1, ['IC']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(1, ['AP']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(1, ['AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['FO']),
      RECIPE_HELPER(1, ['IC']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['IC']),
      RECIPE_HELPER(1, ['TI', 'BL', 'AP']),
      RECIPE_HELPER(2, ['AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['IC']),
      RECIPE_HELPER(2, ['AP', 'FO']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(3, ['IC']),
      RECIPE_HELPER(1, ['AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['IC']),
      RECIPE_HELPER(1, ['AP', 'FO']),
      RECIPE_HELPER(1, ['BI', 'HO', 'BA']),
    ],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(3, ['IC']),
      RECIPE_HELPER(1, ['RA']),
    ],
  },
]
