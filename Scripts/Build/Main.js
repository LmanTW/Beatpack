const { api } = require('@electron-forge/core')
const { zip } = require('zip-a-folder')
const path = require('path')
const fs = require('fs')

// Build
async function build (platforms) {
  await api.package({
    dir: path.resolve(__dirname, '../../Beatpack'),

    platform: platforms,

    interactive: true,
    outDir: path.join(__dirname, 'Cache')
  })

  //await api.make({
  //  dir: path.resolve(__dirname, '../../Beatpack'),

  //  platform: 'darwin',

  //  interactive: true,
  //  outDir: path.join(__dirname, 'Cache')
  //})

  if (!fs.existsSync(path.resolve(__dirname, '../../Builds'))) fs.mkdirSync(path.resolve(__dirname, '../../Builds'))

  if (platforms.includes('win32')) fs.renameSync(path.join(__dirname, 'Cache', 'Beatpack-win32-x64', 'Beatpack.exe'), path.resolve(__dirname, `../../Builds/Beatpack.exe`))

  if (platforms.includes('darwin')) await zip(path.join(__dirname, 'Cache', 'Beatpack-darwin-x64', 'Beatpack.app'), path.resolve(__dirname, `../../Builds/Beatpack.zip`), { destPath: 'Beatpack.app/' })

  fs.rmSync(path.join(__dirname, 'Cache'), { recursive: true })
}

build(['darwin'])
