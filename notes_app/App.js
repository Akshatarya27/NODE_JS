const notes = require('./notes.js')
const chalk  = require('chalk-v2')
const yargs = require('yargs')
const { demandOption, argv } = require('yargs')
const { removenote } = require('./notes.js')

yargs.version('2.0.0.0')

//create add command..
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:'here is my body',
            demandOption:true,
            type:'string'
        }
    },
    handler(addnote){
        notes.addnote(addnote.title, addnote.body)
    }
})

//create remove command..
yargs.command({
    command:"remove",
    describe:"Remove a new note",
    builder:{
        name:{
            describe:'here is the name',
            // demandOption:true,
            type:'string'
        }
    },
    handler(removenote){
    notes.removenote(removenote.title, removenote.body)
    }
})
yargs.command({
    command:"list",
    describe:"List your note",
    handler(){
        notes.listnotes()
    }
})

yargs.parse()
// console.log(yargs.argv)
//argv property is an inbuilt application programming interface of the process module which is used to get the arguments passed to the node.