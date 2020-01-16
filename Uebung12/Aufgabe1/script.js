let daten = [
    { lang: "Python", rating: 8.294 },
    { lang: "JavaScript", rating: 3.302 },
    { lang: "C", rating: 13.337 },
    { lang: "Java", rating: 16.904 },
    { lang: "Visual Basic .NET", rating: 6.459 },
    { lang: "C++", rating: 8.158 },
];
// Erstellt ein td-Element mit dem gegebenen
// Textinhalt
let createTd = function(content) {
    let td = document.createElement("td");
    td.textContent = content;
    return td;
};

daten.sort(function (a, b) {
    return b.rating - a.rating;
});

let index = 1;
for(data of daten){
    let tb = document.querySelector("tbody");
    let tr = document.createElement("tr");

    //let td1 = createTd(index);
    tr.append(createTd(index));

    //let td2 = createTd(data.lang);
    tr.append(createTd(data.lang));

   // let td3 = createTd(data.rating);
    tr.append(createTd(data.rating));
    tb.append(tr);
    index++;
}