function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}


/*Geben Sie mittels JavaScript die Breite des Layout-Viewports auf der Konsole aus.*/
console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel.`);


/*Definieren Sie in dem Skript ein Objekt Seminar*/
function Seminar(titel, name, ort, startzeit, endzeit, fPlaetze, vPlaetze, tutoren){
    this.name = name;
    this.titel = titel;
    this.ort = ort;
    /*this.date = new Date(date);*/
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

/*Erzeugen Sie mindestens zwei Seminar -Objekte als Beispieldatensätze.*/
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

/*Erstellen Sie ein Array seminare und fügen Sie die erstellten Seminar -Objekte in das Array ein*/
var seminare = [sem1, sem2];

/*Sortieren Sie das Array seminare aufsteigend nach der Startzeit der enthaltenenen Seminar -
Objekte.*/
seminare.sort(function (a,b) {
    return a.startzeit - b.startzeit;
});
/*console.log( seminare);*/


/*Ausgabe*/

seminare.forEach(function (item) {
    console.log(`${item.startzeit.toLocaleDateString()},  ${item.BerechnePlaetze()} von ${item.vPlaetze} Plätzen belegt) `);
});


/*Praktikum 11*/
seminare.forEach(function (item) {
    let tr = document.createElement("tr");


    document.querySelector("tbody").append(tr);

    let td1 = document.createElement("td");
    let a =  document.createElement("a");
    a.href = "Detail_Seminar1.html";
    a.append(document.createTextNode(item.titel));
    td1.append(a);
    tr.append(td1);

    let td2 = document.createElement("td");
    td2.append(document.createTextNode(item.startzeit.toLocaleDateString()+ ", " +item.startzeit.toLocaleTimeString()));
    tr.append(td2);

    let td3 = document.createElement("td");
    td3.append(document.createTextNode(item.ort));
    tr.append(td3);
});

