const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  sendRequest: async (name, data) => await ipcRenderer.invoke(name, data)
})
