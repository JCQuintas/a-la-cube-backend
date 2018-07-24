module.exports = {
  UNDEFINED: {
    message: () => 'Error Undefined: This error appeared for unknown motives.',
  },
  RECIPE_NAME_SEARCH_ERROR: {
    message: s =>
      `Recipe Name Search Error: Couldn't find recipe for string '${s}'`,
    status: 400,
  },
  RECIPE_INDEX_SEARCH_ERROR: {
    message: s =>
      `Recipe Index Search Error: Couldn't find recipe at index '${s}'. Please, notice that recipes indexes start at '1'.`,
    status: 400,
  },
}
