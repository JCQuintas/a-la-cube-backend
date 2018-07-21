const gen1 = require('./gen1')

const POKEMON = gen1

const replaceSpecials = string =>
  string
    .replace(/\. |'/, '_')
    .replace('♀', '_FEMALE')
    .replace('♂', '_MALE')

const POKENAMES = POKEMON.map(p => p.name).reduce((v, acc) => {
  acc[replaceSpecials(v).toUpperCase()] = v
  return acc
}, {})

module.exports = {
  POKENAMES,
  POKEMON,
}
