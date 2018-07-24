const ERRORS = require('./errors')

class ApiError extends Error {
  constructor(ERROR, ...args) {
    const error = ERROR.message ? ERROR : ERRORS.UNDEFINED
    super(error.message(...args))
    this.status = error.status
  }
}

module.exports = ApiError
