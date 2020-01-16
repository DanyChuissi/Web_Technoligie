var d = document.getElementById("dashMain");
let a = document.createElement("a");
a.append(document.createTextNode("+"));
var id = document.querySelectorAll("a").length +1;
a.id = "elem"+ id;
d.append(a);


document.getElementById("elem"+id).onclick = function() {
    var url;
    var titel;
   titel = prompt("Bitte geben Sie einen Titel  ein!");
    if(  titel !== ""){
        url = prompt("Bitte geben Sie einen URL ein!");
        if(url !== ""){
            let a = document.createElement("a");
            a.href = url + ".html";
            a.append(document.createTextNode(titel));
            document.getElementById("elem"+id).before(a);
        }
    }

};



