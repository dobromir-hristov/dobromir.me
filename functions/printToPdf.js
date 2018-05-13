const { join } = require('path')
const puppeteer = require('puppeteer')
const chalk = require('chalk')
const ora = require('ora')

const log = console.log
const consSuccess = (text) => log(chalk.green(text))
const consError = (text) => log(chalk.red(text))

const pathToPDF = join(__dirname, '..', 'static', 'dobromir_hristov_cv.pdf')

async function saveToPdf (host, port) {
  const spinner = ora('Opening browser to generate PDF').start()
  let browser
  try {
    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://' + host + ':' + port, { waitUntil: 'networkidle2' })
    spinner.text = 'Generating PDF'
    await page.pdf({ path: pathToPDF, displayHeaderFooter: false, printBackground: true })
    spinner.succeed('PDF Saved')
    return browser.close()
  } catch (err) {
    spinner.fail('Oops. Error occurred...')
    browser.close()
    throw err
  }
}

module.exports = function (host, port) {
  return saveToPdf(host, port).then(() => {
    consSuccess('printToPD finished successfully')
  }).catch((error) => {
    consError(error.message)
  })
}
