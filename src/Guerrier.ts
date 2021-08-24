import { Arme } from "./Arme";
import { Character } from "./Character"

export class Guerrier extends Character {

    constructor(name:string, gender:string, arme : Arme)
    {
        super(name, gender, "Guerrier", arme);
    }
}