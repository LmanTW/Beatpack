const { app, BrowserWindow } = require('electron')
const path = require('path')

let window

// Window
module.exports = class {
  // Create Window
  static async createWindow (debug, pagePath) {
    return new Promise(async (resolve) => {
      if (!app.isReady()) await app.whenReady()

      window = new BrowserWindow({
        title: 'Beatpack',

        resizable: true,

        webPreferences: {
          backgroundThrottling: false,

          preload: path.resolve(__dirname, '../App/Preload.js'),
        },
      })

      if (debug) window.webContents.openDevTools()

      await window.loadFile(pagePath)

      app.on('window-all-closed', () => app.quit())

      resolve()
    })
  }
}
