const express = require("express");
const template = require("./template.js");

const app = express();
app.get("/",function (request, response, next) {
    response.status(200);
    response.send(template.seite("Liste der Feedbacks"))
});
app.post("/",function (request, response, next) {
    response.status(200);
    response.send(template.seite("Neues Feedback"))
});


app.use(function (request, response, next) {
    response.status(200);
    response.send(template.seite("Methode: "+request.method+ ", Url: "+request.uri))
});


app.listen(3000, function () {
    console.log("Lauche auf http://localhost:3000");
});