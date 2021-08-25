import { Arme } from "../src/Arme";
import { Guerrier } from "../src/Guerrier";

test("Quantité de dégat infligé", () => {
    let weapon = new Arme("Epée", 1);
    let guerrier = new Guerrier("test", "sexe", weapon);
    expect(guerrier.attack()).toBeGreaterThan(0);
});