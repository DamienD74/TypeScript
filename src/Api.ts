import axios from "axios";

export function kaamelot(){
    axios({
        method: 'get',
        url: "https://kaamelott.hotentic.com/api/random/personnage/Le%20Ma%C3%AEtre%20d'Armes",
        data: ""
    })
    .then(function (reponse){
        console.log(reponse.data.citation.citation);
    })
    .catch(function(erreur){
        console.log(erreur);
    })
};