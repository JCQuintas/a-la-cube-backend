import gen1 from './gen1'

const POKEMON = gen1

const replaceSpecials = string => string
  .replace(/\. |'/, '_')
  .replace('♀', '_FEMALE')
  .replace('♂', '_MALE')

const POKENAMES = POKEMON.map(p => p.name).reduce((v,acc) => {
  const name = replaceSpecials(v).toUpperCase()
  acc[name] = v
  return acc
}, {})

export {
  POKENAMES,
  POKEMON
}
