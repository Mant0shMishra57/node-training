const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv').config()
const employeeRouter = require('./Employee/routes')
const productRouter = require('./Authentication/routes')

app.use(express.json())

app.use('/employee',employeeRouter)
app.use('/auth',productRouter)

app.use((err, req, res, next) => {
    res.send({message: err.message})
    next()
})


app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})