const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;

app.set('view-engine','ejs');

//use static asset
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/asset',express.static(path.join(__dirname,'assets')))

//home route
app.get('/',(req,res)=>{
    res.render('base.ejs',{title:'Login Application'})
})


app.listen(port,()=>{
    console.log("Listening on port 3000...");
})