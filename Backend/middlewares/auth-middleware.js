const jwt = require('jsonwebtoken');
const Users = require('../models/signup-model');


const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if(!token) {
        res.status(401).json("Unauthorized HTTP, Token not provided");
    } else {
        console.log("Token received: ", token);
        const jwtToken = token.replace('Bearer ', ''); // to remove  the word 'bearer' //
        console.log("Token after replace(): ", jwtToken);

        try {
            const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
            console.log('VERIFIED DATA :' , isVerified);

            const userData = await Users.findOne({email: isVerified.email});
            console.log('USERDATA--', userData);

            // Custom properties //
            req.token = token,
            console.log(req.token); // this token is the one we are receiving from the user (see top) // 
            req.user = userData;
            console.log(req.user);
            req.userId = userData._id;

            next();
        } catch(err) {
            console.log(err);
        }
  
    }
}

module.exports = authMiddleware;




  const checkPassword = async (req, res) => {
    try {
      const { email, password } = req.body;
      const userId = req.user._id;
      console.log(userId);
      const user = await Users.findOne(userId);
      // ... rest of your code
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error checking password' });
    }
  };
