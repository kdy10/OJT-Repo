console.log("Battle of the Warriors\n");

const warrior1 = {
    name: "Zeus", 
    hp: 100,
    strength: 20,
    attack: function(){
        return Math.floor(Math.random() * this.strength + 1);
    }
};

const warrior2 = {
    name: "Thor",
    hp: 110,
    strength: 16,
    attack: function(){
        return Math.floor(Math.random() * this.strength + 1);
    }
};



function battle(warrior1, warrior2, callback) {  // this function simulates the battle of the warrioirs, taking turns to attack each other for 10 rounds
    for (let i = 0; i < 10; i++){

        console.log("\n=== Round " + (i + 1) + " ===\n");
        
        const attack1 = warrior1.attack();
        warrior2.hp -= attack1;
        if (warrior2.hp <= 0) {
            warrior2.hp = 0;
        }
        console.log(warrior1.name + " attacks " + warrior2.name + " and does " + attack1 + " damage!");
        console.log(warrior1.name + " HP: " + warrior1.hp + " | " + warrior2.name + " HP: " + warrior2.hp);

        
        const attack2 = warrior2.attack();
        warrior1.hp -= attack2;
        if (warrior1.hp <= 0) {
            warrior1.hp = 0;
        }
        console.log("\n" +warrior2.name + " attacks " + warrior1.name + " and does " + attack2 + " damage!");
        console.log(warrior1.name + " HP: " + warrior1.hp + " | " + warrior2.name + " HP: " + warrior2.hp );
        if (warrior1.hp <= 0 || warrior2.hp <= 0) {
            break;
        }
    }
    callback();
}

battle(warrior1, warrior2, 
    function() { // added a callback to determine the winner after the battle is done
        if (warrior1.hp > warrior2.hp) {
        console.log("\n" + warrior1.name + " WINS the battle! \n\n");
        }
        else if (warrior2.hp > warrior1.hp) {
            console.log("\n" + warrior2.name + " WINS the battle! \n\n");
        }
        else {
            console.log("\nIt's a DRAW! \n\n");
            }
    }
);

