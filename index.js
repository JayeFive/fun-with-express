var express = require("express");
var app = express();

// Link public folder and force ejs //
app.use(express.static("public"));
app.set("view engine", "ejs");



// ROUTES //
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  var posts = [
    { title: "Post1", author: "Johnny" },
    { title: "Here's another Post", author: "Suzy" },
    { title: "I like this post as well", author: "Timojiin"}
  ];
  
  res.render("posts", {posts: posts});
});



// Listener //
app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server started......");
})