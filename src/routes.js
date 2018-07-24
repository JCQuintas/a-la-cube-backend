const express = require('express')
const bodyParser = require('body-parser')
const { ApiError, ERRORS } = require('utils')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/', (req, res) =>
  res.status(200).json({
    message: 'Welcome to A La Cube API!',
  })
)

router.route('/recipes').get((req, res) => {
  res.status(200).json({ recipes: require('./recipes') })
})

async function findRecipe(recipe) {
  const recipes = require('./recipes')

  if (isNaN(recipe)) {
    const regex = RegExp(`^${recipe.toLowerCase()}[ -]{1}`, 'i')
    const r = recipes.filter(i => regex.test(i.name))[0]
    if (!r) throw new ApiError(ERRORS.RECIPE_NAME_SEARCH_ERROR, recipe)
    return r
  } else {
    const n = parseInt(recipe, 10)
    const r = recipes[n - 1]
    if (!r) throw new ApiError(ERRORS.RECIPE_INDEX_SEARCH_ERROR, n)
    return r
  }
}

router.route('/recipes/:recipe').get((req, res, next) => {
  findRecipe(req.params.recipe)
    .then(r => res.status(200).json(r))
    .catch(next)
})

app.use('/api', router)

app.use((req, res) => {
  const error = new ApiError(ERRORS.ROUTE_NOT_FOUND, req.originalUrl)
  res.status(error.status).send({ error: error.message })
})

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    if (process.env.NODE_ENV === 'development') console.error(err.stack)
    if (!err.status) err.status = 500
    res.status(err.status).send({ error: err.message })
  } else {
    next(err)
  }
})

module.exports = app
