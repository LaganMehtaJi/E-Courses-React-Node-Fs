const express = require("express");
const app = express();
const router = express.Router();

router.post("/courses/create",(req,res)=>{ // POST  "/api/courses/create"Create a new course (Admin)
    console.log(req.body);
    res.send("Course Create API Request");
});
router.get("/courses/",(req,res)=>{     // GET	"/api/courses/"  Get all courses
    res.send("Get All Course API Request");
});
router.get("/courses/:id",(req,res)=>{   // GET	/api/courses/:id	Get course details
    console.log(req.params);   
    res.send("Get Specific Course API Request");
});
router.put("/courses/:id",(req,res)=>{// PUT	/api/courses/:id	Update course (Admin) 
    console.log(req.params);
    res.send("Course Update API Request");
});
router.delete("/courses/:id",(req,res)=>{ // DELETE	/api/courses/:id	Delete course (Admin)
    console.log(req.params);
    res.send("Course Delete API Request");
});

module.exports = router;