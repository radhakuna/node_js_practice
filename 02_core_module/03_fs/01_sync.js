
const { readFileSync, writeFileSync } = require('fs')

// generally we need to provide 2 parameters 1. filepath 2. encoding

console.log(`.. starting thetask`)
const godsFileData = readFileSync('../files/textFiles/gods.txt', 'utf-8')
console.log(godsFileData)

const infoFileDat = readFileSync('../files/info.txt', 'utf-8')
console.log(infoFileDat)

writeFileSync('../files/textFiles/result-sync.txt',
    `Namaste ShivaParvathi...\n ${godsFileData}${infoFileDat}`,
    { flag: 'a' }
)

console.log(`.. ended writting to fle`)

console.log(`.. Good Bye`)