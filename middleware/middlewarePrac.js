const express = require('express')
const app = express();
const router=express.Router();


app.use(express.json())



const auth = function(req,res,next)
{   
    req.user={name:"Abdul Qudoos",title:"buyer"};
    next();
}

const isBuyer = function(req,res,next)
{
    if (req.user.title==="buyer")
    {
        next();
    }
    else{
        res.json({message:"sorry bhai main nhi chal skta"});
    }
}

const isSeller = function(req,res,next)
{
    if (req.user.title==="seller")
    {
        next()
    }
    else{
        res.json({message:"sorry bhai main nhi chal skta"});
    }
}


router.get('/buyer',auth,isBuyer,(req,res)=>{
    console.log("main chal gya hon")
    res.send("bhai main chal gya hon");
})


router.get('/seller',auth,isSeller,(req,res)=>{
    res.send("han bhai main chal gya hon")
})

app.use('/hello',router);


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:3000`)
})

