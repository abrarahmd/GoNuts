const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const cors = require('cors');
const methodOverride = require("method-override"); 

dotenv.config({ path: './.env'})

const publicDirectory = path.join(__dirname, "./public");
const app = express();


app.set('view engine', 'hbs'); //hbs access method
app.use(express.urlencoded({extended: false })); //Help us use push/got method
app.use(express.json()); //Parse JSON bodies (as sent by APU clients)
app.use(express.static(publicDirectory));
app.use(cors({origin: '*'}))
app.use(methodOverride("_method"))


//Database Config
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})
//Database Config Done





//Define Routes 
app.use("/", require("./Routes/pages"));
app.use('/auth', require('./Routes/auth'));
//Ended Defining Routes



//Start Server
app.listen(5000, () => {
    console.log("Server started on Port 5000");
})