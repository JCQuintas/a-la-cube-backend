const recipes = require('./index')

test('All recipes and their indexes', () => {
  recipes.map((r, i) => expect(r.index).toBe(i + 1))
})
