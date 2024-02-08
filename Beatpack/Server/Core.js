const { app, BrowserWindow } = require('electron')
const path = require('path')

// Core
module.exports = class {
  #options

  #requests = {}

  constructor (options) {
    checkParameters({
      options: { type: ['undefined', 'object'] }
    }, { options })

    this.#options = Object.assign({
      debug: false
    }, (options === undefined) ? {} : options)

    if (app.isReady()) this.#start()
    else app.once('ready', () => this.#start())
  } 

  get options () {return this.#options}

  // Send Request
  async sendRequest (content) {
    if (this.window !== undefined) {
      
    }
  }

  // Start The App
  #start () {
    this.window = new BrowserWindow({
      title: 'Beatpack',

      resizable: true
    })

    if (this.#options.debug) this.window.webContents.openDevTools()

    this.window.loadFile(path.resolve(__dirname, '../App/Frame.html'))

    app.on('window-all-closed', () => app.quit())

    console.log(1, app.getPath('appData'))
  }
}

const checkParameters = require('./Tools/CheckParameters')
