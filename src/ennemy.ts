import { Character } from "./character";

export class Ennemy {
    
    name: string;
    life: number;

    constructor(name: string)
    {
        this.name = name;
        this.life = 200;
    }

    attack(character: Character)
    {
        let damage = Math.floor(Math.random() * 100) + 1;
        console.log('Dégat : ' + damage);
        character.life -= damage;

        if (character.life < 0)
        {
            character.life = 0;
        }
        
        console.log('Il vous reste ' + character.life + ' point de vie');
    }
}