var superman = {
    firstName: "Clark",
    secondName: "Kent",
    title: "Superman",
    powers: [
        {
            name: "flight",
            description: "can fly away!"
        },
        {
            name: "super strength",
            description: "can lift heavy objects!"
        },
        {
            name: "x-ray vision",
            description: "can see through solid objects!"
        },
        {
            name: "super speed",
            description: "can move really, REALLY fast!"
        },
        {
            name: "heat vision",
            description: "can shoot lasers from his eyes!"
        }
    ],
    enemies: [
        {
            name: "General Zod",
            homePlanet: "Krypton"
        },
        {
            name: "Lex Luther",
            homePlanet: "Earth"
        }
    ],
    isWearingSuit: false,
    suitUp: function() {
        if (this.isWearingSuit) {
            return "I'm all ready wearing my suit!";
        } else {
            this.isWearingSuit = true;
            return "Looks like Metropolis is in trouble! Better suit up!";
        }
    },
    listEnemies: function() {
        this.enemies.forEach(function(enemy) {
            console.log(enemy["name"] + " is from " + enemy["homePlanet"] + ".");
        });
    },
    listPowers: function() {
        var _this = this;
        this.powers.forEach(function(power) {
            console.log(power["name"] + ": So " + _this.title + " " + power["description"]);
        });
    }
}

console.log(superman.suitUp());
console.log(superman.isWearingSuit);
superman.listEnemies();
superman.listPowers();
