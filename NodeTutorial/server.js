const express = require('express')
const app = express()
const port = 3000

const employeeRouter = require('./Employee/routes')

app.use(express.json())

app.use('/employee',employeeRouter)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})