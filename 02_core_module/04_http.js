const { rmSync } = require('fs')
const http = require('http')

// console.log(http)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Namste Vinayaa !! Welcom to Heaven !!')
    } else if (req.url === '/about') {
        res.end('Gods live in heaven. SriRama, sita, Vishnu, Lakshmi, Shiva, Parvthi, Brahma, Saraswathi')
    } else {
        res.end('No gateway to enter in other evenly parts')
    }
})
server.listen(5000)