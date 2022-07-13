const express= require('express');
const router = express.Router();
const credentials={
    'email':'admin@gmail.com',
    'password':'admin@123'
}

//login route
router.post('/login',(req,res)=>{
    if(req.body.email === credentials.email && req.body.password === credentials.password ){
        req.session.user = req.body.email;
       // res.status(200).end('Login Successful')
        res.redirect('/route/dashboard')
    }else{
        res.status(201).end('Invalid Credentials')
    }
})

//dashboard route
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard.ejs',{user:req.session.user})
    }else{
        res.send('Unauthorized User')
    }
})
module.exports = router;