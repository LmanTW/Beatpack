const { spawn } = require('child_process')

const childProcess = spawn('npm', ['start'])

childProcess.stdout.on('data', (data) => console.log(data.toString()))
childProcess.stderr.on('data', (data) => console.log(data.toString()))
