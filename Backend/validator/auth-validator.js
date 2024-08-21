const {z} = require("zod");


const signupSchema = z.object({
    email: z.string({required_error: "Email is required"}).trim().min(3, {message: "Email must be atleast 3 characters"}).max(255, {message: "Email must be not be more than 255 characters"}),
    
    password: z.string({required_error: "Passwords must be six or more characters"}).trim().min(3, {message: "Passwords must be six or more characters"}).max(255, {message: "Password must be not be more than 255 characters"}),

    name: z.string({required_error: "Please enter your name"}).trim().min(3, {message: "Please enter your name"}).max(255, {message: "Email must be not be more than 255 characters"}),

    birthdate: {
        month: {},
        day: {},
        year: {}
    },

    zipcode: z.string({required_error: "Please enter a valid zip code"}).trim().min(3, {message: "Email must be atlleast 3 characters"}).max(255, {message: "Email must be not be more than 255 characters"}),

    gender: z.string({required_error: "Required"}),
});

module.exports = signupSchema;
