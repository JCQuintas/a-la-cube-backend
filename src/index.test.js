const request = require('supertest')
const app = require('./routes')

test('Test /', async () => {
  const response = await request(app).get('/api/')
  expect(response.statusCode).toBe(200)
  expect(response.body.message).toBe('Welcome to A La Cube API!')
})

test('Test /recipes', async () => {
  const response = await request(app).get('/api/recipes')
  expect(response.statusCode).toBe(200)
  expect(response.body.recipes.length).toBe(18)
})

test('Test /recipes/ambrosia', async () => {
  const response = await request(app).get('/api/recipes/ambrosia')
  expect(response.statusCode).toBe(200)
  expect(response.body.name).toBe('Ambrosia of Legends')
  expect(response.body.index).toBe(18)
})

test('Test /recipes/1', async () => {
  const response = await request(app).get('/api/recipes/1')
  expect(response.statusCode).toBe(200)
  expect(response.body.name).toBe('Mulligan Stew')
  expect(response.body.index).toBe(1)
})

test('Test /recipes/yolo', async () => {
  const response = await request(app).get('/api/recipes/yolo')
  expect(response.statusCode).toBe(400)
  expect(response.body.error).toBe(
    "Recipe Name Search Error: Couldn't find recipe for string 'yolo'."
  )
})

test('Test /recipes/500', async () => {
  const response = await request(app).get('/api/recipes/500')
  expect(response.statusCode).toBe(400)
  expect(response.body.error).toBe(
    "Recipe Index Search Error: Couldn't find recipe at index '500'. Please, notice that recipes indexes start at '1'."
  )
})

test('Test /yolo', async () => {
  const response = await request(app).get('/api/yolo')
  expect(response.statusCode).toBe(404)
  expect(response.body.error).toBe(
    "Route Not Found: Unable to find route '/api/yolo'."
  )
})
