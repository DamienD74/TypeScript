import { Arme } from "./Arme";
import { Character } from "./Character"

export class Magicien extends Character {

    constructor(name:string, gender:string, arme: Arme)
    {
        super(name, gender, "Magicien", arme);
    }
}