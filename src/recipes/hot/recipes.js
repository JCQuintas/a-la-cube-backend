const { RECIPE_HELPER } = require('utils')

module.exports = [
  {
    rarity: 'Basic',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['BL', 'AP']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['BL', 'AP']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['BL', 'AP']),
      RECIPE_HELPER(1, ['HO', 'IC']),
    ],
  },
  {
    rarity: 'Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(1, ['HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['BL', 'AP']),
      RECIPE_HELPER(1, ['BI', 'IC', 'HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['FO']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['BI', 'HO']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['HO']),
      RECIPE_HELPER(1, ['HO', 'IC']),
    ],
  },
  {
    rarity: 'Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['RA']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(2, ['BA']),
      RECIPE_HELPER(1, ['BI']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['BI', 'HO']),
      RECIPE_HELPER(1, ['HO', 'IC']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['RA']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['RA']),
      RECIPE_HELPER(1, ['HO', 'IC']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: false,
    ingredients: [
      RECIPE_HELPER(3, ['TI']),
      RECIPE_HELPER(1, ['MY']),
      RECIPE_HELPER(1, ['BL', 'AP', 'FO']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(1, ['TI']),
      RECIPE_HELPER(1, ['BI']),
      RECIPE_HELPER(2, ['BA']),
      RECIPE_HELPER(1, ['BI', 'HO', 'IC']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [
      RECIPE_HELPER(2, ['TI']),
      RECIPE_HELPER(1, ['BA']),
      RECIPE_HELPER(1, ['RA']),
      RECIPE_HELPER(1, ['BI', 'HO', 'IC']),
    ],
  },
  {
    rarity: 'Very Good',
    expensive: true,
    ingredients: [RECIPE_HELPER(3, ['TI']), RECIPE_HELPER(2, ['RA'])],
  },
  {
    rarity: 'Special',
    expensive: false,
    ingredients: [RECIPE_HELPER(3, ['BA']), RECIPE_HELPER(2, ['BI'])],
  },
]
