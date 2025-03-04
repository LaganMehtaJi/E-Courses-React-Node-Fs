const express = require("express");
const app = express();
const PORT = 3000;
const courseRoutes = require("../routes/courseRoutes");
app.use(express.json());
app.use("/api", courseRoutes);
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Server Busy ${PORT}`);
  } else {
    console.log(`Server Started on ${PORT}`);
  }
});
