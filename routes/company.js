var express = require('express')
var router = express.Router()
var data = require('./compData')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(JSON.stringify(data))
})
module.exports = router
