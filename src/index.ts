import { Character } from "./character";

const prompts = require('prompts');

(async () => {
    const response = await prompts([{
        type: 'text',
        name: 'name',
        message: 'What is your name ?'
    },{
        type: 'text',
        name: 'gender',
        message: 'Select your gender ?'
    }]);

    let character = new Character(response.name, response.gender);
    character.summary();
    console.log("Ennemi en vue !");
})();