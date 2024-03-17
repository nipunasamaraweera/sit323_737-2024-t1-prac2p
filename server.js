const express = require("express");
const path = require("path");
const app = express();
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3040, () => {
  console.log("Server started on port 3040");
});