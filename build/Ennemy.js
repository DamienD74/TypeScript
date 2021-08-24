"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ennemy = void 0;
var Ennemy = /** @class */ (function () {
    function Ennemy(name) {
        this.name = name;
        this.life = 200;
    }
    Ennemy.prototype.attack = function () {
        var damage = Math.floor(Math.random() * 100) + 1;
        console.log('Dégat : ' + damage);
        return damage;
    };
    Ennemy.prototype.takeDamage = function (damage) {
        this.life -= damage;
        if (this.life < 0) {
            this.life = 0;
        }
        console.log('Il reste ' + this.life + ' point de vie à l\'ennemi');
    };
    return Ennemy;
}());
exports.Ennemy = Ennemy;
