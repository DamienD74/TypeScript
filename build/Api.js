"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kaamelot = void 0;
var axios_1 = __importDefault(require("axios"));
function kaamelot() {
    axios_1.default({
        method: 'get',
        url: "https://kaamelott.hotentic.com/api/random/personnage/Le%20Ma%C3%AEtre%20d'Armes",
        data: ""
    })
        .then(function (reponse) {
        console.log(reponse.data.citation.citation);
    })
        .catch(function (erreur) {
        console.log(erreur);
    });
}
exports.kaamelot = kaamelot;
;
