const recipe = require('./index')

test(recipe.name + ' - recipes', () => {
  recipe.recipes
    .map(v => v.ingredients)
    .map(i => i.map(ig => ig.amount).reduce((a, b) => a + b, 0))
    .map(v => expect(v).toBe(5))
})

test(recipe.name + ' - attracted', () => {
  if (recipe.attracted.basic.length > 0) {
    const value = recipe.attracted.basic
      .map(p => p.percent)
      .reduce((a, b) => a + b, 0)
    expect(value).toBeGreaterThanOrEqual(0.94)
    expect(value).toBeLessThanOrEqual(1.1)
  }
  if (recipe.attracted.good.length > 0) {
    const value = recipe.attracted.good
      .map(p => p.percent)
      .reduce((a, b) => a + b, 0)
    expect(value).toBeGreaterThanOrEqual(0.94)
    expect(value).toBeLessThanOrEqual(1.1)
  }
  if (recipe.attracted.very_good.length > 0) {
    const value = recipe.attracted.very_good
      .map(p => p.percent)
      .reduce((a, b) => a + b, 0)
    expect(value).toBeGreaterThanOrEqual(0.94)
    expect(value).toBeLessThanOrEqual(1.1)
  }
  if (recipe.attracted.special.length > 0) {
    const value = recipe.attracted.special
      .map(p => p.percent)
      .reduce((a, b) => a + b, 0)
    expect(value).toBeGreaterThanOrEqual(0.94)
    expect(value).toBeLessThanOrEqual(1.1)
  }
})
