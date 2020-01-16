const http = require("http");
const routing = require("./router.js");

http.createServer(routing.routing);


http.listen(3000, function () {
    console.log("Lauche auf http://localhost:3000");
});