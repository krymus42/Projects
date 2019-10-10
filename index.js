const express = require('express');
const app = express();
const port = 3000;
const timestamp = require("./timestamp");
app.get("/",(req,res)=>{
  res.send("Go to /:time");
});

app.get("/:time",(req,res)=>{
  const data = timestamp(req.params.time);
  res.send(data);
});

app.listen(port,()=>{console.log(`listening on port ${port}`)});
