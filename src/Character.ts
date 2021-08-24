import { Arme } from "./Arme";
import { Fighter } from "./Fighter";

export abstract class Character implements Fighter{
    
    name: string;
    gender: string;
    classWarrior: string;
    life: number;
    weapon: string;
    damageMultiplicater: number;

    constructor(name: string, gender: string, classWarrior:string, arme : Arme)
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
        this.weapon = arme.name;
        this.damageMultiplicater = arme.damage;
    }

    summary()
    {
        console.log("Nom : " + this.name + "\nClasse : " + this.classWarrior + "\nSexe : " + this.gender + "\nVie : " + this.life + 
        "\nArme : " + this.weapon + "\nMultiplicateur dégat : " + this.damageMultiplicater);
    }

    attack()
    {
        let damage = (Math.floor(Math.random() * 100) + 1) * this.damageMultiplicater;
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