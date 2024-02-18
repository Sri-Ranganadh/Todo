const mongoose = require('mongoose')
const {ConnectionURL} = require('./config.js') 
const { text } = require('express')
const { boolean } = require('zod')

mongoose.connect(ConnectionURL)

const todos = new mongoose.Schema({
    title:{
        type : String,
        required :true,
        trim :true
    },
    description : {
        type : String,
        trim : true
    },
    isDone : {
        type : Boolean,
        default : false
    },
    lastModified:{
        type : Date,
        default : Date.now
    }
})
const Todos = mongoose.model('Todos',todos)

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        trim: true,
        required: true,
        maxLength : 25
    },
    lastName :  {
        type: String,
        trim: true,
        required: true,
        maxLength : 25
    },
    userName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 30,
        trim :true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8
    },
    todos : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Todos'
    }]
})

const User = mongoose.model('User',userSchema)

module.exports={
    User,
    Todos
}

