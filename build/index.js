"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("./Api");
var Arme_1 = require("./Arme");
var Ennemy_1 = require("./Ennemy");
var Guerrier_1 = require("./Guerrier");
var Magicien_1 = require("./Magicien");
var prompts = require('prompts');
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, estclassChoice, character, response2, estweaponChoice, arme, response3, estweaponChoice, arme, response3, estCombat, ennemy, nb;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prompts([{
                        type: 'text',
                        name: 'name',
                        message: 'Quelle est ton nom ?'
                    }, {
                        type: 'text',
                        name: 'gender',
                        message: 'Choisis ton sexe ?'
                    }])];
            case 1:
                response = _a.sent();
                estclassChoice = true;
                character = null;
                _a.label = 2;
            case 2:
                if (!estclassChoice) return [3 /*break*/, 13];
                return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'class',
                        message: 'Choisis ta classe \"Guerrier\" ou \"Magicien\" ?'
                    })];
            case 3:
                response2 = _a.sent();
                if (!(response2.class == "Guerrier")) return [3 /*break*/, 7];
                estweaponChoice = true;
                arme = new Arme_1.Arme("Epée", 1);
                _a.label = 4;
            case 4:
                if (!estweaponChoice) return [3 /*break*/, 6];
                return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'weapon',
                        message: 'Choisis ton arme \"Epée\" ou \"Massue\" ?'
                    })];
            case 5:
                response3 = _a.sent();
                if (response3.weapon == "Epée") {
                    estweaponChoice = false;
                }
                else if (response3.weapon == "Massue") {
                    arme = new Arme_1.Arme("Massue", 1.2);
                    estweaponChoice = false;
                }
                else {
                    console.log("Entrée invalide");
                }
                return [3 /*break*/, 4];
            case 6:
                character = new Guerrier_1.Guerrier(response.name, response.gender, arme);
                estclassChoice = false;
                return [3 /*break*/, 12];
            case 7:
                if (!(response2.class == "Magicien")) return [3 /*break*/, 11];
                estweaponChoice = true;
                arme = new Arme_1.Arme("Feu", 1);
                _a.label = 8;
            case 8:
                if (!estweaponChoice) return [3 /*break*/, 10];
                return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'weapon',
                        message: 'Choisis ton arme \"Feu\" ou \"Foudre\" ?'
                    })];
            case 9:
                response3 = _a.sent();
                if (response3.weapon == "Feu") {
                    estweaponChoice = false;
                }
                else if (response3.weapon == "Foudre") {
                    arme = new Arme_1.Arme("Foudre", 1.2);
                    estweaponChoice = false;
                }
                else {
                    console.log("Entrée invalide");
                }
                return [3 /*break*/, 8];
            case 10:
                character = new Magicien_1.Magicien(response.name, response.gender, arme);
                estclassChoice = false;
                return [3 /*break*/, 12];
            case 11:
                console.log('Entrée invalide !');
                _a.label = 12;
            case 12: return [3 /*break*/, 2];
            case 13:
                if (!(character != null)) return [3 /*break*/, 17];
                character.summary();
                estCombat = true;
                ennemy = new Ennemy_1.Ennemy("Démon");
                console.log("Ennemi en vue ! \nC'est un " + ennemy.name);
                _a.label = 14;
            case 14:
                if (!estCombat) return [3 /*break*/, 16];
                return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'choice',
                        message: 'Voulez vous \"Combattre\" ou \"Fuir\" ?',
                    })];
            case 15:
                response = _a.sent();
                if (response.choice == "Combattre") {
                    ennemy.takeDamage(character.attack());
                    if (ennemy.life > 0) {
                        character.takeDamage(ennemy.attack());
                        if (character.life == 0) {
                            console.log('Vous avez perdu !');
                            estCombat = false;
                        }
                    }
                    else {
                        console.log('L\'énnemie est vaincu !');
                        estCombat = false;
                    }
                }
                else if (response.choice == "Fuir") {
                    nb = Math.floor(Math.random() * 100) + 1;
                    if (nb > 80) {
                        console.log("Vous fuyez le combat");
                        estCombat = false;
                    }
                    else {
                        Api_1.kaamelot();
                    }
                }
                else {
                    console.log("Entrée invalide");
                }
                return [3 /*break*/, 14];
            case 16: return [3 /*break*/, 18];
            case 17:
                console.log("Erreur pas de personnage");
                _a.label = 18;
            case 18: return [2 /*return*/];
        }
    });
}); })();
