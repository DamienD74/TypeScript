import { Ennemy } from "./ennemy";

export class Character {
    
    name: string;
    gender: string;
    life: number;

    constructor(name: string, gender: string)
    {
        this.name = name;
        this.gender = gender;
        this.life = 200;
    }

    summary()
    {
        console.log("Nom : " + this.name + "\nSexe : " + this.gender + "\nVie : " + this.life);
    }

    attack(ennemy: Ennemy)
    {
        let damage = Math.floor(Math.random() * 100) + 1;
        console.log('Dégat : ' + damage);
        ennemy.life -= damage;

        if (ennemy.life < 0)
        {
            ennemy.life = 0;
        }
        
        console.log('Il reste ' + ennemy.life + ' point de vie à l\'ennemi');
    }
}