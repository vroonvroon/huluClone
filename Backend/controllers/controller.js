const Users = require('../models/signup-model');
const bcrypt = require('bcrypt');

// POSTING USER INFO //
const SignUp = async (req,res) => {
    console.log(req.body);
    try {
      const { email, password, name, birthdate, zipcode, gender } = req.body;

      // CHECK IF USER ALREADY EXISTS //
      const userExists = await Users.findOne({email});
        if(userExists) {
          return res.status(400).json("User Exists");
        } else {

       // HASH PASSWORD // (this is commented because we want this logic to be clean. So now we will add this to controllers)
      //  const salt = await bcrypt.genSalt(10);
      //  const hashedPassword = await bcrypt.hash(password, salt);

      // CREATING USER (IF USER DOESNT EXIST)//
      const createUser = await Users.create({
         email,
        //  password: hashedPassword,
         password,
         name,
         birthdate: {
           month: birthdate.month,
           day: birthdate.day,
           year: birthdate.year
         },
         zipcode,
         gender
       });
       console.log(createUser);
        res.status(201).json({createUser, token: await createUser.generateToken(), userId: createUser._id.toString() });
      }
     } catch (err) {
       console.log("Error while creating your account", err);
     }
}

// LOGIN //
const LogIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json("Invalid email or password");
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json("Invalid email or password");
    }
    const userData = {
      token: await user.generateToken(),
      name: user.name,
      email: user.email,
      // Add any other fields you want to store
    };
    res.status(200).json({
      userData
    });
    // localStorage.setItem('user', JSON.stringify(userData));
  } catch (err) {
    console.log("Error while logging in", err);
    res.status(500).json("Internal Server Error");
  }
};

// const LogIn = async (req, res) => {
//      console.log(req.body);
//      try {
//        const {email, password} = req.body;
//        const isLoggedIn = await Users.findOne({email});

//        if (!isLoggedIn) {
//           res.status(401).json("Invalid Credentials")
//        } else {
//           // const user = await bcrypt.compare(password, isLoggedIn.password); // this is commented because this line of code is used in model/signup-model.js file as a model function using schema methods
//           const passwordValid = await isLoggedIn.comparePassword(password);
//           if(passwordValid) {
//              res.status(200).json({
//               msg: "Login Successful",
//               token: await isLoggedIn.generateToken(),
//               userId: isLoggedIn._id.toString()
//              });
//           } else {
//             res.status(401).json("Invalid email or password")
//           }
//        }
//      } catch (err) {
//        console.log(err);
//        res.status(500).json("Internal Server Error")
//       //  res.status(400).json("Login Failed")
//      }
// }



// GET USER DATA //


//GET USER LOGIC //
const User = async (req, res) => {
  try {
    const userData = req.user;
    // console.log("UserData in Controller", userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
  }
}


const getUser = async (req, res) => {
   try{
    const id = req.params.id;
    const response = await Users.findOne({_id : id});
    // console.log(response);
    res.status(200).json(response)
   } catch(err) {
     console.log(err);
     res.status(500).json({ message: "Internal Server Error" });
   }
};

// UPDATE USER INFO //
const UpdateUser = async (req, res) => {
   try {
      const id = req.params.id;
      const updatedUserData = req.body;

      const updatedData = await Users.updateOne({_id: id}, {$set: updatedUserData});
      res.status(200).json(updatedData);
   } catch (err) {
     console.log(err);
   }
}


const updateUser = async (req, res) => {
  console.log('params.id:', req.params.id);
    try {
      const id = req.params.id;
      const updatedUserData = req.body;

      const updatedData = await Users.updateOne({_id: id}, {$set: updatedUserData});
      res.status(200).json(updatedData);
  } catch (err) {
    console.log(err);
  }
}

// DELETE USER //
const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Users.deleteOne({_id: id});
    // console.log(response);
    res.status(200).json({message: 'User Deleted'});
  } catch (err) {
    console.log(err);
  }
}


const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Users.deleteOne({_id: id});
    console.log(response);
    res.status(200).json({message: 'User Deleted'});
  } catch (err) {
    console.log(err);
  }
}


module.exports = {SignUp, LogIn, User, getUser, UpdateUser, Delete, deleteUser, updateUser};