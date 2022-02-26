const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10;
let employees = []
const InvalidCredential = new Error('Invalid Credentials!')

const login = (req,res)=> {
console.log("req.body:",req.body)
      const {name,email, password} = req.body

     if (!email || !password) {
           res.status(400)
           res.json({'message':'Invalid Credential!', 'status':'failed'})
           return;
 
      }

      const emp = employees.find(e => e.email === email)

      if (!emp) {
            res.status(400)
            res.json({'message':'Invalid Credential!', 'status':'failed'})
            return;

      }

     const passwordStatus = bcrypt.compareSync(password, emp.password)

      if (!passwordStatus) {
            res.status(200)
            res.json({'message':'Invalid Credential!', 'status':'failed'})
            return;
      }
      const token = jwt.sign({email},process.env.SECRET_KEY)
      res.json({token : token, status: true})
    //  res.send('Login was successfully!')
}

const register = (req,res)=> {

  const {name,email, password} = req.body
  
   if (!email || !password) {
         res.status(400)
         res.json({'message':'Invalid Credentials!', 'status':'failed'})
   }
   if(employees.some(emp => emp.email === email)){
       res.status(400)
       res.json({'message':'Employee must be unique!', 'status':'failed'})
   }

  let employee = {name,email, password} 
  employee.password = bcrypt.hashSync(password, saltRounds)
  employees = [employee, ...employees]
  res.json({'message':'Employee registered Successfully!', 'status':'success'})
}

module.exports = {
    login,
    register
}