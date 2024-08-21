require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const SignUpPage = require('./routers/routes');
const LogInPage = require('./routers/routes');
const db = require('./db');
const cors = require('cors');
const SeriesPage = require('./series/series-router');
const Profilepage = require('./routers/routes');
const CheckEmail = require("./routers/routes");
const CheckPassword = require("./routers/routes");


app.use(cors());
app.use(express.json());
app.use('/api/auth', SignUpPage);
app.use('/api/auth', LogInPage);
app.use('/api/data', SeriesPage);
app.use('/api/data', Profilepage);
app.use('/api/auth', CheckEmail);
app.use('/api/auth', CheckPassword);


db().then(() => {
    app.listen(port, () => {
        console.log(`Website running on port ${port}`);
    });  
}).catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);
});
