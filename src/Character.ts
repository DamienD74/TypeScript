import { Fighter } from "./Fighter";

export class Character implements Fighter{
    
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

    attack()
    {
        let damage = Math.floor(Math.random() * 100) + 1;
        console.log('Dégat : ' + damage);
        return damage;

    }

    takeDamage(damage:number)
    {
        this.life -= damage;

        if (this.life < 0)
        {
            this.life = 0;
        }
        
        console.log('Il vous reste ' + this.life + ' point de vie');
    }
}