import { Fighter } from "./Fighter";

export class Ennemy implements Fighter{
    
    name: string;
    life: number;

    constructor(name: string)
    {
        this.name = name;
        this.life = 200;
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
        
        console.log('Il reste ' + this.life + ' point de vie à l\'ennemi');
    }
}