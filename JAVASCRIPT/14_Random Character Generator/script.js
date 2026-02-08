console.log("Random Character Generator");


const randomName = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
const randomClass = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
const randomAbility = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

const character = {     // created an object to store properties and metthods
    name: "Hero",
    health: 100,
    class: null,
    ability: null,
    randomizedHealth: function() {      // generate random health
        return Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    },
    randomizedClass: function() {       // generate random class
        return randomClass[Math.floor(Math.random() * randomClass.length)];
    },
    randomizedAbility: function() {      // generate random special ability
        return randomAbility[Math.floor(Math.random() * randomAbility.length)];
    }
}


/* * DOCU: Creates a new character object with a random name and randomized stats (health, class, and ability).
 * @param {string} name - The name of the character (uses a random name if left blank)
 * @returns {Object} - A character object containing stats and a battle simulation
 * @throws {Error} - If the global 'character' helper object or 'randomName' list is missing
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function generateCharacter(name){      
    return { 
        name: name || randomName[Math.floor(Math.random() * randomName.length)],
        health: character.randomizedHealth(),
        class: character.randomizedClass(),
        specialAbility: character.randomizedAbility(),
        
        battle(otherCharacter) {        
            const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            const prevHealth = otherCharacter.health;

            otherCharacter.health -= damage;
            if (otherCharacter.health < 0) {
                otherCharacter.health = 0;
            }
            console.log("Character " + this.name + " attacked Character " + otherCharacter.name + " with " + this.specialAbility + ". " + otherCharacter.name + "'s health dropped from " + prevHealth + " to " + otherCharacter.health + ".");
        }
    }
}

/* * DOCU: Creates a list of multiple random characters at once.
 * @param {number} num - The number of characters to create
 * @returns {Array} - A list containing the generated character objects
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function generateMultipleCharacters(num) {       
    const characters = [];
    for (let i = 0; i < num; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}




// Example Generation of character
console.log("\n=== Single Character ===\n");
const randomCharacter = generateCharacter();
console.dir(randomCharacter);
console.log("Name: " + randomCharacter.name);
console.log("Health: " + randomCharacter.health);
console.log("Class: " + randomCharacter.class);
console.log("Special Ability: " + randomCharacter.specialAbility);


// Example Character Battle
console.log("\n=== Character Battle ===\n");
const char1 = generateCharacter("Zane");
const char2 = generateCharacter("Elara");
char1.battle(char2);


// Generate Multiple Characters
console.log("\n=== Multiple Characters ===\n");
const party = generateMultipleCharacters(5);
console.dir(party);