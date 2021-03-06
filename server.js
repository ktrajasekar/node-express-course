const express = require("express");
const app = express();

const mockdata = [{ name: "Rajasekar" }, { name: "Raju" }];

app.get("/users/:id", function(req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "Success",
    users: req.params.id
  });
});

app.listen(8000, function() {
  console.log("server is running");
});
