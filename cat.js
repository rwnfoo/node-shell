const fs = require('fs')

function cat (fileName) {

  fs.readFile(fileName, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    } else
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  })
}

module.exports = cat
