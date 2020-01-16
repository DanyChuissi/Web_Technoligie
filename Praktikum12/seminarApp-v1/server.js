const fs = require("fs");
const http = require("http");


const server = http.createServer(function (request, response) {
    const url = request.url;
    const method = request.method;
    if(method === "GET") {
        var dash = "";
        if (url === "/") {
            dash = "dashboard.html";
        }
        if (url !== "/seminarliste.html") {
            fs.readFile("public" + url + dash, function (err, test) {
                if (err) {
                    fs.readFile("public/404.html", function (err, test) {
                        response.writeHead(404);
                        response.end(test);
                    })
                } else {
                    response.writeHead(200);
                    response.end(test);
                }
            });
        }else{
            response.writeHead(200);
            response.end(createSemListe());
        }

    }

}).listen(8020, function () {
    console.log("Fertig, lausche auf http://localhost:8020")
});


function Seminar(titel, name, ort, startzeit, endzeit, fPlaetze, vPlaetze, tutoren){
    this.name = name;
    this.titel = titel;
    this.ort = ort;
    this.startzeit = new Date(startzeit);
    this.endzeit = new Date(endzeit);
    this.fPlaetze = fPlaetze;
    this.vPlaetze = vPlaetze;
    this.tutoren = tutoren;
}

/**
 * @return {number}
 */
Seminar.prototype.BerechnePlaetze = function () {
    return this.vPlaetze - this.fPlaetze;
};


var sem1 = new Seminar(
    "Python für Anfänger",
    "Martin Dinner",
    "C 1.32",
    "2019-06-03T08:30:00",
    "2019-06-03T10:05:00",
    100,
    150,
    ["ada3, dom4, fab5"]
);

var sem2 = new Seminar(
    "Excel Basis",
    "Fabien Schäder",
    "C 2.32",
    "2019-05-03T14:15:00",
    "2019-05-03T15:50:00",
    15,
    25,
    ["tim4, rob12, dan9"]
);

var sem3 = new Seminar(
    "I&G",
    "Kai Stephen",
    "C 2.32",
    "2019-05-03T14:15:00",
    "2019-05-03T15:50:00",
    15,
    25,
    ["tim4, rob12, dan9"]
);

var seminare = [sem1, sem2, sem3];

seminare.sort(function (a,b) {
    return a.startzeit - b.startzeit;
});


function createSemListe (){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seminar Liste</title>
    <link rel="stylesheet" type="text/css"
          href="css/myStyle.css">
    <link rel="stylesheet" type="text/css"
          href="css/flexbox.css">
</head>
<body>
<div id="hauptContainer">
    <header>
         <a href="/"><img src="img/seminare_logo.jpg" alt="Das Logo sollte hier stehen"></a>
        <h1>Seminare Informationen</h1>
    </header>
    <nav>
        <div id="navContainer">
            <a href="seminarliste.html">Seminare Liste</a>
            <a href="Detail_Seminar1.html">Seminare 1</a>
            <a href="detaill_SeminarLeiter3.html">Seminare 1 Detail</a>
            <a href="New_Seminar.html"> Seminar anlegen</a>
        </div>
    </nav>
    <div id="centerContainer">
        <main>
            <div id="mainContainer">
                <div>
                    <form action="https://labs.inf.fh-dortmund.de/seminarApp/testSearch.php" method="GET">
                        <label for="semtitle">Seminartitel:</label>
                        <span class="required"> <input list="seminarliste" type="text" id="semtitle" name="semtitle"
                                                       required
                                                       maxlength="20" pattern="[A-Z][a-zA-Z]*"></span>
                        <br>
                        <datalist id="seminarliste">
                            <option value="Präsentation Technicken">
                            <option value="Börseseminar">
                            <option value="Informatik & Geselschaft">
                        </datalist>
                        <button type="submit">Finden</button>
                    </form>
                </div>
                <div>
                    <h3>Liste Alle Seminate</h3>
                    <table id="semTable">
                        <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Veranstaltungsdatum</th>
                            <th>Veranstaltungsort</th>
                        </tr>
                        </thead>
                        <tbody>
                       ${getSemListe()}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        <aside>

            <h4>
                Aktuelle Meldungen
            </h4>
            <ul>
                <li> Raumverlegung: 24-04-2019, Der Seminar 1 finden heute im Raum AE-3.34</li>
                <li> Seminar Ausfall: 05-05-2019, Der Seminar 3 fällt heute aus</li>
                <li> Seminar Anmeldung: 01-04-2019, Die Anmeldung Frist für alle seminare ist am 30-04-2019</li>
            </ul>
        </aside>
    </div>
    <footer>
        <em>Copyrigth</em>
    </footer>
</div>
</body>
</html>
    `;

}

//${getSemListe()}
function getSemListe() {
    var result = "";
    seminare.forEach(function (item) {

     result += `<tr>
                  <td><a href="Detail_Seminar1.html"> ${item.titel}</a></td>
                  <td>${item.startzeit.toLocaleDateString()+ ", " +item.startzeit.toLocaleTimeString()}</td>
                  <td>${item.ort}</td>
                </tr>`
    });
    return result;
}

/*
<tr>
<td><a href="Detail_Seminar1.ejs"> ${item.titel}</a></td>
<td>${item.startzeit.toLocaleDateString()+ ", " +item.startzeit.toLocaleTimeString()}</td>
<td>${item.ort}</td>
</tr>`*/
