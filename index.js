const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is a server! I swear!");
});

app.listen(3030, () => {
  console.log("Sever running on port 3030");
});
