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

function addSeminar (titel, name, ort, startzeit, endzeit, fPlaetze, vPlaetze, tutoren){
    let seminar = new Seminar(titel, name, ort, startzeit, endzeit, fPlaetze, vPlaetze, tutoren);
    seminar.startTime = `${seminar.startzeit.getHours()}:${seminar.startzeit.getMinutes()}`;
    seminar.endTime = `${seminar.endzeit.getHours()}:${seminar.endzeit.getMinutes()}`;
    seminare.push(seminar);
}


function getIndexSeminar(url) {
    return url[15]

}
function getIndexSeminarLeiter(url) {
    return url[22]
}


for (seminar of seminare){
    seminar.startTime = `${seminar.startzeit.getHours()}:${seminar.startzeit.getMinutes()}`;
    seminar.endTime = `${seminar.endzeit.getHours()}:${seminar.endzeit.getMinutes()}`;
}



seminare.sort(function (a,b) {
    return a.startzeit - b.startzeit;
});

module.exports.seminareListe = seminare;
module.exports.addSeminar = addSeminar;
module.exports.getIndexSeminar = getIndexSeminar;
module.exports.getIndexSeminarLeiter = getIndexSeminarLeiter;