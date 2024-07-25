const fs = require('fs')

fs.writeFile('message.txt', "teste de registro bruno", (err) => {
    if (err) throw err;
    console.log('The file has been saved!')
  })