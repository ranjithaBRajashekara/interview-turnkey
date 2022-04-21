var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.js")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    var decoded = await jwt.verify(req.headers.authorization, 'rgifdrdcyftfyhbyftyd');
    if (decoded != null) {
      let existingUser = await UserModel.findOne({emailId: decoded.emailId}).exec()
      if (!existingUser) {
        return res.send('user does not exists')
      } else{
        return res.send({usename:existingUser.username, emailId: existingUser.emailId, contact: existingUser.contact})
      }
    }
    return res.send('respond with a resource');
  } catch(error){
    console.log(error)
    return res.send(error)
  }
});

module.exports = router;
