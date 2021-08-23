export class Character {
    
    name: string;
    gender: string;
    life: number;

    constructor(name: string, gender: string)
    {
        this.name = name;
        this.gender = gender;
        this.life = 100;
    }

    summary()
    {
        console.log("Name : " + this.name + "\nGender : " + this.gender + "\nLife : " + this.life);
    }
}