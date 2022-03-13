const os = require('os')

//console.log(os)
console.log(__dirname)
console.log(__filename)

console.log(os.hostname())

console.log(os.userInfo())
console.log(os.uptime() / (60 * 60))

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem() / (1000 * 1000 * 1000),
    freeMemory: os.freemem() / (1000 * 1000 * 1000)
}

console.log(currentOs)