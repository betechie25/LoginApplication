const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view-engine','ejs');

//home route
app.get('/',(req,res)=>{
    res.render('base.ejs')
})


app.listen(port,()=>{
    console.log("Listening on port 3000...");
})