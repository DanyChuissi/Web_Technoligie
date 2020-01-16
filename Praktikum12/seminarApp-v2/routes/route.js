const express = require("express");
const seminare = require("../models/seminars");
const medienJS = require("../models/Medien");
const bodyParser = require("body-parser");
//const axios = require('axios');



const seminareListe = seminare.seminareListe;
const getIndexSeminar = seminare.getIndexSeminar;
const getIndexSeminarLeiter = seminare.getIndexSeminarLeiter;
const postAudio = medienJS.PostNeuAudio;
const postBild = medienJS.PostNeuBild;
const getAudio = medienJS.meinAudio;
const getBild = medienJS.meinBild;



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));




    app.get("/Medienliste",function (resquest, response, next) {
        //let erg = medienJS.updateMedienListe();
        medienJS.promise().then(resolve => {
            console.log("succes in my promise");
            response.status(200);
            response.render("Medienliste", {medien: resolve});
        }).catch(error => {
            console.log("error in my promise" + error);
        });

    });

    app.post("/New_Medium",function (request, response, next) {
       if(request.body.mediumType === "Audio"){
           response.status(200);
           postAudio(request.body.mediumTitel, request.body.mediumDauer, request.body.mediumInterpr, request.body.mediumJahr)
               .then(response2 => {
                   response.redirect("/Medienliste");
               }).catch(error => {
                   console.log(error)
           });
       }
       else if(request.body.mediumType === "Bild" ){
           response.status(200);
           postBild(request.body.mediumTitel, request.body.mediumOrt, request.body.mediumJahr);
          // alert("Bild wurde im Datenbank gespeichert");
           response.redirect("/MedienListe");
       }
    });

    app.get("/Detail_Medium/:id/:type",function (resquest, response, next) {
        console.log(resquest.params.type);
        console.log(resquest.url);
        response.status(200);
        if(resquest.params.type === "Audio") {
            getAudio(resquest.params.id).then(response2 => {
                let audio = response2.data;
                console.log("audio aufgerufen ");
                console.log("----------------");
                // console.log(audio);
                response.status(200);
                response.render("Detail_Medium", {medium: audio});
            }).catch(error => {
                console.log('medien error ' + error);
            });
        }
        else{
            getBild(resquest.params.id).then(response2 => {
                let bild = response2.data;
                console.log("bild aufgerufen ");
                console.log("----------------");
                // console.log(audio);
                response.status(200);
                response.render("Detail_Medium", {medium: bild});
            }).catch(error => {
                console.log('medien error ' + error);
            });
        }

    });

    /*app.get("/mediengeloecht/:id/:type",function (resquest, response, next) {

    }*/

    app.get("/",function (resquest, response, next) {
        response.status(200);
        response.render("dashboard");
    });

    app.get("/Detail_Seminar1",function (resquest, response, next) {
        response.status(200);
        response.render("Detail_Seminar1", {seminar: seminareListe[0]});
    });
    app.get("/Detail_Seminar2",function (resquest, response, next) {
        response.status(200);
        response.render("Detail_Seminar2", {seminar: seminareListe[1]});
    });
    app.get("/Detail_Seminar3",function (resquest, response, next) {
        response.status(200);
        response.render("Detail_Seminar3" , {seminar: seminareListe[2]});
    });

    app.get("/Detaill_SeminarLeiter1",function (resquest, response, next) {
        response.status(200);
        response.render("Detaill_SeminarLeiter1", {seminar: seminareListe[0]});
    });
    app.get("/Detaill_SeminarLeiter2",function (resquest, response, next) {
        response.status(200);
        response.render("Detaill_SeminarLeiter2" , {seminar: seminareListe[1]});
    });
    app.get("/Detaill_SeminarLeiter3",function (resquest, response, next) {
        response.status(200);
        response.render("Detaill_SeminarLeiter3",{seminar: seminareListe[2]});
    });

    app.get("/New_Seminar",function (resquest, response, next) {
        response.status(200);
        response.render("New_Seminar");
    });
    app.get("/New_Medium",function (resquest, response, next) {
        response.status(200);
        response.render("New-Medium");
    });

    app.get("/seminarliste",function (resquest, response, next) {
        response.status(200);
        response.render("seminarliste", {seminareListe: seminareListe});
    });

    app.post("/New_Seminar",function (request, response, next) {
        response.status(200);
        seminare.addSeminar(request.body.semtitle, request.body.semlead, "C E32", request.body.semdate+", "+request.body.semstart, request.body.semdate+", "+request.body.semend, 13, request.body.semseats, request.body.semtutors);
        response.render("seminarliste", seminare);
        response.redirect("/seminarliste");
    });


    app.use(function (resquest, response, next) {
        if(resquest.url.startsWith("/Detail_Seminar")){
            response.status(200);
            let index = getIndexSeminar(resquest.url);
            response.render("Detail_Seminar", {seminar: seminareListe[(index-1)], index: index});
        }else if(resquest.url.startsWith("/detaill_SeminarLeiter")){
            response.status(200);
            let index = getIndexSeminarLeiter(resquest.url);
            response.render("Detaill_SeminarLeiter", {seminar: seminareListe[index-1]});
        }
        else{
            response.status(404);
            response.render("404");
        }

    });


module.exports = app;
