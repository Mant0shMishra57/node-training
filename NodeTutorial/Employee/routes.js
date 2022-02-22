const express = require('express')
const router = express.Router();
const controller = require('./controller')

router.get('/getAll', controller.getAll)

router.post('/create',controller.create)

router.put('/update/:id',controller.update)

router.delete('/delete/:id',controller.remove)

module.exports = router