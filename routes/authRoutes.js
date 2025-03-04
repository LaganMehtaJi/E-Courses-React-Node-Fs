const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
    console.log(req.body);
    res.send("Request on Register API");
});

router.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("Request on Login Aunthenticate API");
});

router.get("/profile",(req,res)=>{
    console.log(req.body);
    res.send("Request on a Get  profile  API");
});

router.post("/logout",(req,res)=>{
    console.log(req.body);
    res.send("Request Logout API");
});
module.exports = router;




