const printToPdf = require('./printToPdf')
const chalk = require('chalk')
const ora = require('ora')

const log = console.log
const consSuccess = (text) => log(chalk.green(text))
const consError = (text) => log(chalk.red(text))
// Require `Nuxt` And `Builder` modules
const { Nuxt, Builder } = require('nuxt')

// Require Nuxt config
const config = require('../nuxt.config.js')
const port = 3001
const host = 'localhost'

// Create a new Nuxt instance
async function initServer () {
  consSuccess('Starting server')
  const nuxt = new Nuxt(config)
  const builder = await new Builder(nuxt).build()
  await nuxt.listen(port, host)
  consSuccess('Starting printing script')
  await printToPdf(host, port)
  consSuccess('Closing server')
  return nuxt.close()
}

initServer()
