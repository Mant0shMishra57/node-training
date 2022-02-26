const express = require('express')
const router = express.Router();
const controller = require('./controller')
const autoCheck = require('../Authentication/authorization')

router.get('/getAll',autoCheck,controller.getAll)

router.post('/create',autoCheck,controller.create)

router.put('/update/:id',autoCheck,controller.update)

router.delete('/delete/:id',autoCheck,controller.remove)

module.exports = router