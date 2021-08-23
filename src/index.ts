import { Ennemy } from "./Ennemy";
import { Guerrier } from "./Guerrier";
import { Magicien } from "./Magicien";

const prompts = require('prompts');

(async () => {
    let response = await prompts([{
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
        let response2 = await prompts({
            type: 'text',
            name: 'class',
            message: 'Choisis ta classe \"Guerrier\" ou \"Magicien\" ?'
        });

        if (response2.class == "Guerrier")
        {
            character = new Guerrier(response.name, response.gender);
            estclassChoice = false;
        }
        else if (response2.class == "Magicien")
        {
            character = new Magicien(response.name, response.gender);
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
            response = await prompts({
                type: 'text',
                name: 'choice',
                message: 'Voulez vous \"Combattre\" ou \"Fuir\" ?',
            });
    
            if (response.choice == "Combattre")
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
            else if (response.choice == "Fuir")
            {
                console.log("Vous fuyez le combat");
                estCombat = false;
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