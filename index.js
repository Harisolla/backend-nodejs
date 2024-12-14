const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//bring all routes
const auth = require('./routes/api/auth');
const questions = require('./routes/api/questions');
const profile = require('./routes/api/profile');
const passport = require('passport');



const app = express();

//middleware for body-parser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//mongoDB configuration
const db= require('./setup/myUrl').mongoURL;

//Attempt to connect to database
mongoose
    .connect(db)
    .then(() =>  console.log('mongoDB connected successfully')) 
    .catch(err => console.log(err));

const port= process.env.PORT || 3000;


//passport middleware
app.use(passport.initialize());
//config  foor jwt strategy
require("./strategies/jsonwtStrategies")(passport)

//just for testing -> route 
app.get('/',(req,res)=>{
   res.send(`hey there big stack`);
});

//actual routes
app.use('/api/auth',auth);
app.use('/api/questions',questions);
app.use('/api/profile',profile);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});