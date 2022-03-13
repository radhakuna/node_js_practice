
const path = require('path')

const pathDetails = {
    dirname: path.dirname(__filename),
    basename: path.basename(__filename),
    extname: path.extname(__filename)
}

console.log(pathDetails)

const filePath = path.join('/files', 'textFiles', 'info.txt')
console.log(filePath)

const absolutePath = path.resolve(__dirname, 'files', 'textFiles', 'info.txt')
console.log(absolutePath)
