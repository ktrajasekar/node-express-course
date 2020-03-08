const express = require("express");
const app = express();

const mockdata = [{ name: "Rajasekar" }, { name: "Raju" }];

app.get("/users", function(req, res) {
  res.json({
    success: true,
    message: "Success",
    users: mockdata
  });
});

app.listen(8000, function() {
  console.log("server is running");
});
