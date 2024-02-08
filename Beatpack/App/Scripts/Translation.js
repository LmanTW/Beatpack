export { loadTranslation, getTranslation, Translation }

let defaultTranslation = await window.electron.sendRequest('getLanguageContent', 'en-US')
let translation = {}

// Load Translation
async function loadTranslation (languageCode) {
  translation = await window.electron.sendRequest('getLanguageContent', languageCode)
}

// Get Translation
function getTranslation (name, args) {
  let content = (translation[name] === undefined) ? defaultTranslation[name] : translation[name]

  if (args !== undefined) Object.keys(args).forEach((name) => content = content.replaceAll(`{${name}}`, args[name]))

  return content
}

// Light-Framework Plugin
const Translation = {
  id: 'Translation',

  init: (Core) => {
    Core.AttributeManager.createAttribute('content', (element, value) => element.innerHTML = getTranslation(value))
  }
}
