const express = require("express");
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(
    'mongodb+srv://valiant:Kfsl7ybZQvDldCVG@cluster0.8lvqjnz.mongodb.net/test'
).catch(err => console.log(JSON.stringify(err)))

mongoose.connection.on('error', err => console.log(err))

app.get("/getUsers", async(req, res) => {
    UserModel.find({}).then((err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/createUser", async(req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save();

    res.json(user)
})


app.listen(3001,
    () => { console.log('server is running on port 3001') }
)