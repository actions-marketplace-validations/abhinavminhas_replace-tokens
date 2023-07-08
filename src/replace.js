"use strict"

const fs = require('fs')

async function replaceTokens (files, replacements) {
    const fileNames = files.replace(' ', '').split(',')
    const replacementValues = replacements.replace(' ', '').split(',')
    console.log(`Total Files: ${fileNames.length}`)
    for(let file = 1; file <= fileNames.length; file++) {
      let fileName = fileNames[file - 1]
      console.log(`File ${file}: ${fileName}`)
      fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
          throw err
        } else {
          let result = data
          console.log(result)
          for (let i = 0; i < replacementValues.length; i++) {
            let keyValuePair = replacementValues[i].split('=')
            let key = keyValuePair[0]
            let value = keyValuePair[1]
            result = result.replace(key, value)
          }
          console.log(`File ${file} (Replaced): ${fileName}`)
          fs.writeFile(fileName, result, 'utf8', function (err) {
            if (err) {
              throw err
            } else {
              console.log(result)
            }
          })
        }
      })
  }
  await delay(100)
}

const delay = millisecs => new Promise(resolve => setTimeout(resolve, millisecs))

module.exports = {
  replaceTokens
}