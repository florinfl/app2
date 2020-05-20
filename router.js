const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/',userController.home)

router.post('/register',userController.register)

// router.get('/about1',function(req,res){
//     res.send('about1 page')
// })

module.exports = router