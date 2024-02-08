(async () => {
  const { ipcMain, shell } = require('electron')
  const path = require('path')

  const LanguageManager = require('./Server/LanguageManager')
  const DataManager = require('./Server/DataManager')
  const Window = require('./Server/Window')

  const options = {
    debug: true
  }
  
  DataManager.checkData()
 
  LanguageManager.loadLanguagesInfo()

  Window.createWindow(options.debug, (DataManager.needSetup) ? path.join(__dirname, 'App', 'Setup.html') : path.join(__dirname, 'App', 'Frame.html'))

  ipcMain.handle('open', (_, url) => {return shell.openExternal(url)})

  ipcMain.handle('getAllLanguagesInfo', () => {return LanguageManager.getAllLanguagesInfo()})
  ipcMain.handle('getLanguageContent', (_, languageCode) => {return LanguageManager.getLanguageContent(languageCode)})
})()
