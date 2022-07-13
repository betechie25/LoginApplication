const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
const {v4:uuidv4} = require('uuid');
const router = require('./router');
const port = process.env.port || 3000;


app.set('view-engine','ejs');

//use static asset
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/asset',express.static(path.join(__dirname,'assets')))

//form data parse
app.use(express.urlencoded({extended:false}))

//set session
app.use(session({
    secret: uuidv4(),// create unique secret id
    resave: false,
    saveUninitialized: true
}))

//specify route
app.use('/route',router)

//home route
app.get('/',(req,res)=>{
    res.render('base.ejs',{title:'Login Application'})
})


app.listen(port,()=>{
    console.log("Listening on port 3000...");
})