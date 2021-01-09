'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CheckAge {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request
    const age=request.input('edad')
    if(age < 18)
    {
      return response.status(400).json({ message: 'Tienes que tener mas de 18 años para publicar'})
    }
    await next()
  }
}

module.exports = CheckAge
