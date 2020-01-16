
const fs = require("fs");
// Hier den Code einfügen!
fs.writeFile("test.txt" , "Hallo WEB1", function (err, test){
    fs.readFile("test.txt", function (err, test) {
        console.log(`Gelesener Inhalt: ${test}`)
    });
});



console.log("Datei schreiben und lesen:");