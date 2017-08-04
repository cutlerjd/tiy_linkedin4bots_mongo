const express = require('express');
const app = express.Router();
const users = require('../models/userModel.js')

app.get('/',function(req, res, next){
    users.allBots(function(data){
        res.render("directory",{bots:data})
    })

})

app.get('/:username', function (req, res) {
    console.log(req.params.username)
  users.findBot(req.params.username,function(bot){
    res.render("user", bot)
  })
  
});

module.exports = app;