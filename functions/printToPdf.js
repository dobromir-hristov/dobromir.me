const { join } = require('path')
const puppeteer = require('puppeteer')
const chalk = require('chalk')
const ora = require('ora')

const log = console.log
const consSuccess = (text) => log(chalk.green(text))
const consError = (text) => log(chalk.red(text))

const pathName = join(__dirname, '../', 'static', 'dobromir_hristov_cv.pdf')

async function saveToPdf () {
  const spinner = ora('Opening browser to generate PDF').start()
  let browser
  try {
    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })
    spinner.text = 'Generating PDF'
    await page.pdf({ path: pathName, displayHeaderFooter: false, printBackground: true })
    spinner.succeed('PDF Saved')
    return browser.close()
  } catch (err) {
    spinner.fail('Oops. Error occurred...')
    browser.close()
    throw err
  }
}

saveToPdf().then(() => {
  consSuccess('printToPD finished successfully')
}).catch((error) => {
  consError(error.message)
})
