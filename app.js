var express = require("express");
var app = express();

//Settings
app.set("appName", "Sevysunat");
app.set("port", 3000);

// Middlewares
app.use(express.json());

// app.get("/", function(req, res) {
//   res.send("Hello World!");
// });

//Routes
app.post("/user/:id", function(req, res) {
  console.log(req.body);
  console.log(req.params);
  res.send(`Usuario ${req.params.id} eliminado`);
});

app.use(express.static("public"));

app.listen(app.get("port"), function() {
  console.log("Example app listening on port", app.get("port"));
});
