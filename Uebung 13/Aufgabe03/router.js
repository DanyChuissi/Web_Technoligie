
/*const template = require("./template.js");
function route (request, response){
    const method = request.method;
    if(method === "GET"){
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            Server: "Geht dich nix an."
        });
        response.end(template.seite("Liste der Feedbacks"));
    }
    else if (method === "POST"){
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            Server: "Geht dich nix an."
        });
        response.end(template.seite("Neues Feedback"));
    }
    else {
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            Server: "Geht dich nix an."
        });
        response.end(template.seite("Fehler"));
    }
    return response;
}

module.exports.routing = route;*/