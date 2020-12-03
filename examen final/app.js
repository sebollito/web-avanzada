let express = require("express");
let app = express();
let request = require("request");

app.set("view engine", "ejs");

//Search
app.get("/", function (req, res) {
  res.render("search");
});

//Results

app.get("/results", function (req, res) {
  let query = req.query.search;
  let url = "https://jsonplaceholder.typicode.com/photos/"+query;
  request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let data = JSON.parse(body);
    res.render("results", { data: data });
  }
});
});

app.listen(3000, function () {
  console.log("Server listening on Port 3000");
});
