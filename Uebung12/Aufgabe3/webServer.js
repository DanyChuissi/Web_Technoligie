const fs = require("fs");
const http = require("http");

/*fs.readFile("welcome.html", function (err, test) {
    console.log(`Gelesener Inhalt: ${test}`)
});*/

const server = http.createServer(function (request, response) {
    fs.readFile("welcome.html", function (err, test) {
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            Server: "Geht dich nix an."
        });
        response.end(test);

    });
}).listen(8080, function () {
    console.log("Fertig, lausche auf http://localhost:8080")
});

function getHtml () {
    fs.readFile("welcome.html", function (err, test) {
        return test;

    });
}