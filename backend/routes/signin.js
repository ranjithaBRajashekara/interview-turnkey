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
    try {
        const salt = "$2b$10$JrIWV3ifkIAYCQxUjeMntOmN4fbcwTrPn7FWRhMZ4W40vsOfonPDi";
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash
        var existingUser = []
        existingUser = await UserModel.findOne({emailId: req.body.emailId}).exec()
        if(existingUser){
          const validPassword = await bcrypt.compare(req.body.password, existingUser.password);
          if (validPassword) {
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
            return res.send({accessToken, refreshToken})
          } else{
            return res.send("password or email don't match")
          }
        }
        return res.send('user does not exists')
      } catch (error) {
        throw error;
      }
  });

module.exports = router;