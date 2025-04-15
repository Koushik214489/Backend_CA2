const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 5000
const app = express()
// const user = require('./controllers')

require('dotenv').config()

app.use(express.json())

const create = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connection is successfull')
    } catch(error) {
        console.log('DB is not connected')
    }
}

app.listen(PORT,()=> {
    console.log(`Server is running on PORT ${PORT}`);
    create()
})












