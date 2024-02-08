const { spawn } = require('child_process')

const childProcess = spawn('npm', ['run', 'start'], {
  cwd: __dirname
})

childProcess.stdout.on('data', (data) => console.log(data.toString()))
childProcess.stderr.on('data', (data) => console.log(data.toString()))
