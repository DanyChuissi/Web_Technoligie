const http = require("http");
 http.createServer(function (request, response){
     const method = request.method;
     const url = request.url;
     if(method === "GET" && url.startsWith("/feedback")){
         response.writeHead(200, {
             "Content-Type": "text/html; charset=utf-8",
             Server: "Geht dich nix an."
         });
         response.end(getSeite("Liste der feedbacks"));
     }
     else if (method === "POST" && url.startsWith("/feedback")){
         response.writeHead(200, {
             "Content-Type": "text/html; charset=utf-8",
             Server: "Geht dich nix an."
         });
         response.end(getSeite("Neues Feedback"));
     }
     else {
         response.writeHead(200, {
             "Content-Type": "text/html; charset=utf-8",
             Server: "Geht dich nix an."
         });
         response.end(getSeite(

         ));
     }
 }).listen(3000, function () {
     console.log("Lauche auf http://localhost:3000");
 });


function getSeite (text) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seite</title>
</head>
<body>
    <h3>${text}</h3>
    <form action="feedback" method="get" ><button>Get</button></form>
    <form action="feedback" method="post" ><button>Post Methode</button> </form>
</body>
</html>`
}