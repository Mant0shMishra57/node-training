const jwt = require('jsonwebtoken');

function authorization(req,res,next) {
    const authorization = req.headers.authorization
    if (!authorization){
         res.status(401)
         throw new Error('Unauthorized')
    }
    const token = authorization.split(' ')[1]

    const data = jwt.verify(token,process.env.SECRET_KEY )
    if (!data){
        res.status(401)
        throw new Error('Unauthorized') 
    }
     req.employee = data
     next()  
}

module.exports = authorization