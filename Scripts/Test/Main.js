const { spawn } = require('child_process')
const path = require('path')

const childProcess = spawn('npm', ['run', 'start'])

childProcess.stdout.on('data', (data) => console.log(data.toString()))
childProcess.stderr.on('data', (data) => console.log(data.toString()))
