import { Fighter } from "./Fighter";

export abstract class Character implements Fighter{
    
    name: string;
    gender: string;
    classWarrior: string;
    life: number;

    constructor(name: string, gender: string, classWarrior:string)
    {
        this.name = name;
        this.gender = gender;
        this.classWarrior = classWarrior;
        if (classWarrior == "Guerrier")
        {
            this.life = 240;
        }
        else
        {
            this.life = 200;
        }
    }

    summary()
    {
        console.log("Nom : " + this.name + "\nSexe : " + this.gender + "\nVie : " + this.life);
    }

    attack()
    {
        let damage = Math.floor(Math.random() * 100) + 1;
        if (this.classWarrior == 'Magicien')
        {
            damage *= 1.2;
        }
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