const express = require("express");
const  PORT = 3000;
const app = express();
app.use(express.json())
const authRoutes = require("../routes/authRoutes");
app.use("/api/auth", authRoutes); 

app.listen(PORT,()=>{
    console.log(`Server Start on : ${PORT}`);
});



