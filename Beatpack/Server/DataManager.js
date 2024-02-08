const { app } = require('electron')
const path = require('path')
const fs = require('fs')

let needSetup

// Data Manager
module.exports = class {
  static get needSetup () {return needSetup}

  // Check Data
  static checkData () {
    const dataPath = path.join(app.getPath('documents'), 'Beatpack')

    if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath)

    if (!fs.existsSync(path.join(dataPath, 'Beatmaps'))) fs.mkdirSync(path.join(dataPath, 'Beatmaps'))

    needSetup = !fs.existsSync(path.join(dataPath, 'Settings.json'))
  }

  // Save Settings
  static saveSettings (options) {
    const dataPath = path.join(app.getPath('documents'), 'Beatpack')

    fs.writeFileSync(path.join(dataPath, 'Settings.json'), JSON.stringify(options))
  }
}
