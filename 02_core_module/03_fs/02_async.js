const { readFile, writeFile } = require('fs')

console.log(`.. starting thetask`)
readFile('../files/textFiles/gods.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        const first = data
        readFile('../files/info.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                const second = data;
                writeFile('../files/textFiles/result-async.txt',
                    `Namste Shiva & Parvathi ... \n${first}${second}`,
                    { flag: 'a' },
                    (err, data) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log("Successfull Written to a file  ...  " + data)
                        }
                    })
                console.log(`.. ended writting to fle`)
            }
        })
    }
})

console.log(`.. Good Bye`)