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
const errorMiddleware = require("./middlewares/error-middleware");


app.use(cors());
app.use(express.json());
app.use('/api/auth', SignUpPage);
app.use('/api/auth', LogInPage);
app.use('/api/data', SeriesPage);
app.use('/api/data', Profilepage);
app.use(errorMiddleware);


db().then(() => {
    app.listen(port, () => {
        console.log(`Website running on port ${port}`);
    });  
}).catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);
});
