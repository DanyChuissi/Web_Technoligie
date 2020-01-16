const request = require('request');
const axios = require('axios');

function postAudio (titel, dauer, interpreter, jahr) {
    return axios.post("http://localhost:8080/audio", {  titel:titel,
        dauer :dauer,
        interpreter:interpreter,
        jahr :jahr})
}

function postBild (titel, ort, jahr) {
    axios.put("localhost:8080/bild", {  titel:titel,
        ort:ort,
        jahr :jahr}).then(response => {
        return response.data.titel === titel;
    }).catch(error => {
        console.log('medien error '+error);
    });
}

function getAudio (audioID){
    return axios.get('http://localhost:8080/audio/Get/'+audioID);
}

function getBild (bildID){
    return axios.get('http://localhost:8080/bild/Get/'+bildID);
}

var medien =
    axios.get('http://localhost:8080/medien')
    .then(response => {
       medien = response.data;
       // console.log(medien);
    })
    .catch(error => {
        console.log('medien error '+error);
    });

function myPromise() {
    medien = [];
    return new Promise(function (resolve, reject) {
                axios.get('http://localhost:8080/medien')
                .then(response => {
                    medien = response.data;
                    console.log("Update medien aufgerufen ");
                    const successObject = response.data;
                    resolve(successObject);
                })
                .catch(error => {
                    console.log('medien error '+error);
                    const errorObject = {
                        msg: 'An error occured',
                    };
                    reject(errorObject);
                });
    });
}

function medienloeschen(id, type) {
    if(type === "Audio"){
        return axios.get('http://localhost:8080/bild//'+id);
    }
    else{

    }
}

function updateMedien() {
    let erg = false;
    return axios.get('http://localhost:8080/medien');
           /* .then(response => {
                medien = response.data;
                 console.log("Update medien aufgerufen "+ erg);
                 erg = true;
                 return erg;
            })
            .catch(error => {
                console.log('medien error '+error);
                return erg;
            });*/
}
function  getMedien2 () {return medien;}

module.exports.medien = medien;
module.exports.medienliste = getMedien2;
module.exports.PostNeuBild = postBild;
module.exports.PostNeuAudio = postAudio;
module.exports.updateMedienListe = updateMedien;
module.exports.promise = myPromise;
module.exports.meinAudio = getAudio;
module.exports.meinBild = getBild;