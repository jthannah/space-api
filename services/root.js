'use strict'

const got = require('got')
const api_key = process.env.NASA_KEY ? process.env.NASA_KEY : "DEMO_KEY";

module.exports = async function (fastify, opts, next) {
  fastify.get('/image-of-the-day', async function (request, reply) {
    const response = await got('https://api.nasa.gov/planetary/apod?api_key=' + api_key)
    return response.body
  })

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
