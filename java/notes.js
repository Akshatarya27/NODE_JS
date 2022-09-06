const { Console } = require('console')
const fs = require('fs')
const { title } = require('process')
const chalk = require('chalk-v2')

const getnotes = () => {
    return 'YOUR NOTES!!!'
}

const addnote = (title, body) => {
    const notes = loadnotes()
    const duplicatenotes = notes.filter((note) => note.title === title)
    // const duplicatenotes = notes.filter(function(note) {
    //     return note.title === title
    // })

    if (duplicatenotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        savenotes(notes)
        console.log('New Note Added!!')
    } else {
        console.log('note title taken!!')
    }
}

const removenote = (title) => {
    const notes = loadnotes()
    const notestokeep = notes.filter((note) => note.title !== title)

    if (notes.length > notestokeep.length) {
        console.log(chalk.green.inverse("Note removed!!"))
        savenotes(notestokeep)
    } else {
        console.log(chalk.red.inverse("no note found!!"))
    }
}


const listnotes = () => {
    const notes = loadnotes()

    console.log(chalk.inverse("YOUR NOTES!!"))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const savenotes = (notes) => {
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', datajson)
}
const loadnotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    }
    catch (e) {
        return []
    }
}
module.exports = {
    getnotes: getnotes,
    addnote: addnote,
    removenote: removenote,
    listnotes:listnotes
}