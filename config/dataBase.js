const {MongoClient} = require("mongodb")
const mongoURL = "mongodb+srv://ayush19:86O29Xobbkk9HQN9@cluster0.hsiwc6f.mongodb.net/?retryWrites=true&w=majority"
const mongoServer = new MongoClient(mongoURL)

const databaseName = mongoServer.db("Human_Resourse")

const connection = async()=>{
    try{
        await mongoServer.connect()
    }
    catch (err){
        console.log(err)
    }
}

module.exports = {databaseName, connection}