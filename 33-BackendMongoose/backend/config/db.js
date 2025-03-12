const mongoose = require("mongoose")
// const DB = process.env.DB.replace("<db_password>", process.env.PASSWORD)
// const DB = process.env.DB

function connectDB() {
    mongoose.connect(process.env.DB).then(() => {
        console.log("Connected to MongoDB")
    }).catch((err) => {
        console.log(err)
    })
}


module.exports = { connectDB }