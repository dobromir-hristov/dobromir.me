/*
* Used for IDE package resolving mostly
*/

const { join, resolve } = require('path')
const srcDir = '.'
const rootDir = '.'

module.exports = {
  resolve: {
    alias: {
      '~': join(__dirname, srcDir),
      '~~': join(__dirname, rootDir),
      '@': join(__dirname, srcDir),
      '@@': join(__dirname, rootDir)
    }
  }
}
