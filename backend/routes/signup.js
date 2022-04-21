var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.js")

const accessTokenOptions = {
  algorithm: 'HS256',
  expiresIn: '2 days'
};

const refreshTokenOptions = {
  algorithm: 'HS256',
  expiresIn: '5 days'
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {
    try 
    {
      var existingUser = []
      existingUser = await UserModel.findOne({emailId: req.body.emailId}).exec()
      console.log(existingUser)
      if(existingUser)
      {
        throw "user already exists"
      }
      // const salt = await bcrypt.genSalt(10);
      const salt = "$2b$10$JrIWV3ifkIAYCQxUjeMntOmN4fbcwTrPn7FWRhMZ4W40vsOfonPDi"
      console.log(salt)
      // var body = JSON.parse(body)
      console.log(req.body.password)
      const hash = await bcrypt.hash(String(req.body.password), salt);
      req.body.password = hash
      console.log(req.body)
      console.log(req.body.username)
      console.log(req.body.password)
      console.log(req.body.emailId)
      console.log(req.body.contact)
      const accessToken = jwt.sign(
        req.body,
        'rgifdrdcyftfyhbyftyd',
        accessTokenOptions
      );
      const refreshToken = jwt.sign(
        req.body,
        'kfsjhdisufykcndhfsi',
        refreshTokenOptions
      );
      const newUserDbDocument = new UserModel(req.body)
    
      await newUserDbDocument.save();
      res.send({ accessToken, refreshToken });
      } catch (error) {
        console.log(error);
        res.send(error)
      }
  });

module.exports = router;