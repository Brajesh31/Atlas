var express = require('express');
var router = express.Router();
const path = require('path');
const collection = require('./users');

router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/home', function (req, res, next) {
  res.render('home');
});
router.get('/sign', function (req, res, next) {
  res.render('signUp');
});
router.post('/sign', async (req, res) => {
  const data = {
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  await collection.insertMany([data]);

  res.render('home');
});
router.post('/', async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.username });
    if (check.password === req.body.password) {
      res.render('Home');
    } else {
      res.send('Wrong Password');
    }
  } catch (error) {
    res.send('Wrong details');
  }
});

module.exports = router;
