let mongoDB = require("mongodb")
let MongoClient = mongoDB.MongoClient
let url = "mongodb://localhost:27017/Robots4LinkedIn"
let conn = null

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log("Unable to connect to the database", error)
    }
    else {
        conn = db
    }
})
function findBot(username,cb) {
    conn.collection('robots').findOne({"username":username},function(error,bot){
        if(error){
            console.log("Something happened, or no bot",error)
            cb(null)
        }
        else{
            console.log(bot)
            cb(bot)
        }
    })
    
    // return data.users.filter(function (person) {
    //     return person.username == username
    // })[0]

}

function allBots(cb) {
    conn.collection('robots').find().toArray(function (error, documents) {
        cb(documents)
    })
}

module.exports = {
    findBot: findBot,
    allBots: allBots
}