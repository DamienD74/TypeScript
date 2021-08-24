"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(name, gender, classWarrior, arme) {
        this.name = name;
        this.gender = gender;
        this.classWarrior = classWarrior;
        if (classWarrior == "Guerrier") {
            this.life = 240;
        }
        else {
            this.life = 200;
        }
        this.weapon = arme.name;
        this.damageMultiplicater = arme.damage;
    }
    Character.prototype.summary = function () {
        console.log("Nom : " + this.name + "\nClasse : " + this.classWarrior + "\nSexe : " + this.gender + "\nVie : " + this.life +
            "\nArme : " + this.weapon + "\nMultiplicateur dégat : " + this.damageMultiplicater);
    };
    Character.prototype.attack = function () {
        var damage = (Math.floor(Math.random() * 100) + 1) * this.damageMultiplicater;
        if (this.classWarrior == 'Magicien') {
            damage *= 1.2;
        }
        console.log('Dégat : ' + damage);
        return damage;
    };
    Character.prototype.takeDamage = function (damage) {
        this.life -= damage / 2;
        if (this.life < 0) {
            this.life = 0;
        }
        console.log('Il vous reste ' + this.life + ' point de vie');
    };
    return Character;
}());
exports.Character = Character;
