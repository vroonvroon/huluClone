const bcrypt = require("bcrypt");
const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");

const SignupSchema = new Schema({
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      birthdate: {
         month: {type: String, required: true},
         day: {type: Number, required: true},
         year: {type: Number, required: true},
      },
      zipcode: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
});

// secure password with bcrypt //
SignupSchema.pre("save", async function(next) {
    console.log("pre method", this);
    const user = this;

    if(!user.isModified('password')) {
       next();
    } else {
        try {
           const salt = await bcrypt.genSalt(10);
           const hash = await bcrypt.hash(user.password, salt);
           user.password = hash; // this line indicates that we now change the users password to a decrypted password //
        } catch (err) {
           console.log(err);
        }
    }
});

// login for just for email  //
SignupSchema.methods.emailExists = async function(email) {
  try {
    const user = await this.findOne({ email });
    return user !== null;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// login for email & password //
SignupSchema.methods.comparePassword = async function(password) {
  console.log('Using the older login comparePassword method');
  try {
    console.log('Password:', password);
    console.log("Hashed Password : ", this.password);
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// generating jwt token //
SignupSchema.methods.generateToken = async function() {
  try {
    return jwt.sign(
    { 
      userId: this._id.toString(), 
      email: this.email.toString()
    }, 
      process.env.JWT_KEY, 
    { 
      expiresIn: "30d" 
    });
  } catch (err) {
     console.log(err);
  }  
};

const Users = model('Users', SignupSchema);


module.exports = Users;