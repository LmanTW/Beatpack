const { ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

const languagesInfo = {}

// Language Manager
module.exports = class {
  // Load Languages
  static loadLanguagesInfo () {
    fs.readdirSync(path.resolve(__dirname, '../App/Languages')).forEach((file) => {
      languagesInfo[path.parse(file).name] = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../App/Languages/${file}`))).info
    })
  }
  
  // Get All Languages
  static getAllLanguagesInfo () {
    return languagesInfo
  }
  
  // Get Language Content
  static getLanguageContent (languageCode) {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, `../App/Languages/${languageCode}.json`))).content
  }
}
