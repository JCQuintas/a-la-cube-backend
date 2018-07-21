import INGREDIENTS from './ingredients'

export default {
  name: "Mulligan Stew",
  description: "Whatever ingredients you like. Favourite food of some Pokémon on Tumblecube Island.",
  recipes: [
    {
      rarity: "Basic",
      expensive: false,
      ingredients: [
        {
          amount: 5,
          name: [
            INGREDIENTS.TINY_MUSHROOM,
            INGREDIENTS.BLUK_BERRY,
            INGREDIENTS.APRICORN,
            INGREDIENTS.FOSSIL
          ]
        }
      ]
    },
    {
      rarity: "Good",
      expensive: false,
      ingredients: [
        {
          amount: 4,
          name: [
            INGREDIENTS.TINY_MUSHROOM,
            INGREDIENTS.BLUK_BERRY,
            INGREDIENTS.APRICORN,
            INGREDIENTS.FOSSIL
          ]
        },
        {
          amount: 1,
          name: [
            INGREDIENTS.BIG_ROOT,
            INGREDIENTS.ICY_ROCK,
            INGREDIENTS.HONEY,
            INGREDIENTS.BALM_MUSHROOM
          ]
        }
      ]
    },
    {
      rarity: "Good",
      expensive: true,
      ingredients: [
        {
          amount: 3,
          name: [
            INGREDIENTS.TINY_MUSHROOM,
            INGREDIENTS.BLUK_BERRY,
            INGREDIENTS.APRICORN,
            INGREDIENTS.FOSSIL
          ]
        },
        {
          amount: 2,
          name: [
            INGREDIENTS.BIG_ROOT,
            INGREDIENTS.ICY_ROCK,
            INGREDIENTS.HONEY,
            INGREDIENTS.BALM_MUSHROOM
          ]
        }
      ]
    },
    {
      rarity: "Very Good",
      expensive: false,
      ingredients: [
        {
          amount: 2,
          name: [
            INGREDIENTS.TINY_MUSHROOM,
            INGREDIENTS.BLUK_BERRY,
            INGREDIENTS.APRICORN,
            INGREDIENTS.FOSSIL
          ]
        },
        {
          amount: 3,
          name: [
            INGREDIENTS.BIG_ROOT,
            INGREDIENTS.ICY_ROCK,
            INGREDIENTS.HONEY,
            INGREDIENTS.BALM_MUSHROOM
          ]
        }
      ]
    },
    {
      rarity: "Very Good",
      expensive: true,
      ingredients: [
        {
          amount: 1,
          name: [
            INGREDIENTS.TINY_MUSHROOM,
            INGREDIENTS.BLUK_BERRY,
            INGREDIENTS.APRICORN,
            INGREDIENTS.FOSSIL
          ]
        },
        {
          amount: 4,
          name: [
            INGREDIENTS.BIG_ROOT,
            INGREDIENTS.ICY_ROCK,
            INGREDIENTS.HONEY,
            INGREDIENTS.BALM_MUSHROOM
          ]
        }
      ]
    },
    {
      rarity: "Special",
      expensive: false,
      ingredients: [
        {
          amount: 5,
          name: [
            INGREDIENTS.BIG_ROOT,
            INGREDIENTS.ICY_ROCK,
            INGREDIENTS.HONEY,
            INGREDIENTS.BALM_MUSHROOM
          ]
        }
      ]
    },
    {
      rarity: "Special",
      expensive: true,
      ingredients: [
        {
          amount: 5,
          name: [
            INGREDIENTS.RAINBOW_MATTER
          ]
        }
      ]
    },
  ]
}
