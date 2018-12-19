var express = require('express')
var router = express.Router()
var login = require('./login')
// var bcrypt = require('bcrypt')

const saltRounds = 10
const myUserName = 'test@test.com'
const myPwd = 'welcome123'
// let myHash = ''
/* GET home page. */
router.post('/', function (req, res, next) {
    if (myUserName == req.body.email && myPwd == req.body.pwd){        
        console.log('good User')
        res.send({status: 200})
    } else {        
        console.log('bad User')
        res.send({status: 403})
    }
// ------------------------------------------------
// CODE TO BE USED ALONG BCRYPT
//   if (!(myUserName == req.body.email)) {
//     console.log('bad User')
//     res.send({status: 403})
//     return
//   }
//   bcrypt.hash(myPwd, saltRounds, function (err, mockStoredHash) {
//     if (err) {
//       console.log('Error while hashing', err)
//       return
//     }
//     console.log('hash:', mockStoredHash)
//     bcrypt.compare(req.body.pwd, mockStoredHash, (err, success) => {
//       if (err) {
//         console.log('Error while comparing pwd', err)
//         return
//       }
//       if (success) {
//         console.log('good User')
//         res.send({status: 200})
//       } else {
//         console.log('bad User')
//         res.send({status: 403})
//       }
//     })
//   })
  //   res.send(JSON.stringify(data))
  console.log('in login post', req.body)
})
module.exports = router
