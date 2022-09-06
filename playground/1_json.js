const fs = require('fs')

const book = {
    title:'EGO IS THE ENEMY',
    author:"AKSHAT ARYA"
}

const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseddata = JSON.parse(bookJSON)
// console.log(parseddata.title)

fs.writeFileSync('1-json.json',bookJSON)

const databuffer = fs.readFileSync('1-json.json')
const datajson = databuffer.toString()
const data = JSON.parse(datajson)
const data2 = JSON.parse(bookJSON)

console.log(databuffer)
console.log(datajson)
console.log(data)
console.log(bookJSON)
console.log(data2)