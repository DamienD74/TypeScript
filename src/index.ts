import { kaamelot } from "./Api";
import { Arme } from "./Arme";
import { Ennemy } from "./Ennemy";
import { Guerrier } from "./Guerrier";
import { Magicien } from "./Magicien";

const prompts = require('prompts');

(async () => {
    let responseChoice = await prompts([{
        type: 'text',
        name: 'name',
        message: 'Quelle est ton nom ?'
    },{
        type: 'text',
        name: 'gender',
        message: 'Choisis ton sexe ?'
        
    }]);

    let estclassChoice = true;
    let character = null;

    while (estclassChoice)
    {
        let responseClass = await prompts({
            type: 'text',
            name: 'class',
            message: 'Choisis ta classe \"Guerrier\" ou \"Magicien\" ?'
        });

        if (responseClass.class == "Guerrier")
        {
            let estweaponChoice = true;
            let arme = new Arme("Epée", 1);
            
            while (estweaponChoice)
            {
                let responseWeapon = await prompts({
                    type: 'text',
                    name: 'weapon',
                    message: 'Choisis ton arme \"Epée\" ou \"Massue\" ?'
                });
                
                if (responseWeapon.weapon == "Epée")
                {
                    estweaponChoice = false;
                }
                else if (responseWeapon.weapon == "Massue")
                {
                    arme = new Arme("Massue", 1.2);
                    estweaponChoice = false;
                }
                else
                {
                    console.log("Entrée invalide");
                }
            }

            character = new Guerrier(responseChoice.name, responseChoice.gender, arme);
            estclassChoice = false;
        }
        else if (responseClass.class == "Magicien")
        {
            let estweaponChoice = true;
            let arme = new Arme("Feu", 1);

            while (estweaponChoice)
            {
                let responseWeapon = await prompts({
                    type: 'text',
                    name: 'weapon',
                    message: 'Choisis ton arme \"Feu\" ou \"Foudre\" ?'
                });
                
                if (responseWeapon.weapon == "Feu")
                {
                    estweaponChoice = false;
                }
                else if (responseWeapon.weapon == "Foudre")
                {
                    arme = new Arme("Foudre", 1.2);
                    estweaponChoice = false;
                }
                else
                {
                    console.log("Entrée invalide");
                }
            }

            character = new Magicien(responseChoice.name, responseChoice.gender, arme);
            estclassChoice = false;
        }
        else
        {
            console.log('Entrée invalide !')
        }
    }

    if (character != null)
    {
        character.summary();

        let estCombat = true;
        let ennemy = new Ennemy("Démon");
    
        console.log("Ennemi en vue ! \nC'est un " + ennemy.name);
    
        while (estCombat)
        {
            responseChoice = await prompts({
                type: 'text',
                name: 'choice',
                message: 'Voulez vous \"Combattre\" ou \"Fuir\" ?',
            });
    
            if (responseChoice.choice == "Combattre")
            {
                ennemy.takeDamage(character.attack());
    
                if (ennemy.life > 0)
                {
                    character.takeDamage(ennemy.attack());
    
                    if (character.life == 0)
                    {
                        console.log('Vous avez perdu !')
                        estCombat = false;
                    }
                }
                else
                {
                    console.log('L\'énnemie est vaincu !')
                    estCombat = false;
                }
            }
            else if (responseChoice.choice == "Fuir")
            {
                let nb = Math.floor(Math.random() * 100) + 1;
                if (nb > 80)
                {
                    console.log("Vous fuyez le combat");
                    estCombat = false;
                }
                else 
                {
                    kaamelot();
                }
            }
            else
            {
                console.log("Entrée invalide");
            }
        }
    }
    else 
    {
        console.log("Erreur pas de personnage");
    }  
})();