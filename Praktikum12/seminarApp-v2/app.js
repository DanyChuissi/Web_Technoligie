const express = require('express');
const app = express();
const routes = require("./routes/route");

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.use(routes);

app.listen(8040, function () {
   console.log("Lauche auf http://localhost:8040");
});

