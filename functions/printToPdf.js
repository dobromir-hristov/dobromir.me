const { join } = require('path')
const puppeteer = require('puppeteer')
const chalk = require('chalk')
const ora = require('ora')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

isDev = process.env.NODE_ENV === 'development'
const urlToOpen = isDev ? 'http://localhost:3000' : process.env.URL || 'https://dobromir.me'
const log = console.log
const consSuccess = (text) => log(chalk.green(text))
const consError = (text) => log(chalk.red(text))

const pathName = join(__dirname, '../', (isDev ? 'static' : 'dist'), 'dobromir_hristov_cv.pdf')

async function saveToPdf () {
  const spinner = ora('Opening browser to generate PDF').start()
  let browser
  try {
    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(urlToOpen, { waitUntil: 'networkidle2' })
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
