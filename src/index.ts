import { Character } from "./Character";
import { Ennemy } from "./Ennemy";

const prompts = require('prompts');

(async () => {
    let response = await prompts([{
        type: 'text',
        name: 'name',
        message: 'Quelle est ton nom ?'
    },{
        type: 'text',
        name: 'gender',
        message: 'Choisi ton sexe ?'
    }]);

    let character = new Character(response.name, response.gender);
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
})();