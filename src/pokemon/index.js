const gen1 = require('./gen1')

const POKEMON = gen1

const replaceSpecials = string =>
  string
    .replace(/\. |'/, '_')
    .replace('♀', '_FEMALE')
    .replace('♂', '_MALE')

const POKENAME = POKEMON.map(p => p.name).reduce((acc, v) => {
  acc[replaceSpecials(v).toUpperCase()] = v
  return acc
}, {})

module.exports = {
  POKENAME,
  POKEMON,
}
