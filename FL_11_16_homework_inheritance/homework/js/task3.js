function Pokemon() {
    this.name = null;
    this.specie = null;
    this.type = null;
    this.flying = false;

    this.getType = () => this.type;
    this.getSpecie = () => this.specie;
    this.canFly = () => this.flying;
    this.getPokemonType = () => this.name;
}

//
// -------------------------------------CHARMANDER------------------------------------//
//

function Charm() {
    this.specie = 'Flame Pokémon';
    this.type = 'Fire';
}

function Charmander() {
    Pokemon.call(this);
    Charm.call(this);

    this.specie = 'Lizard Pokémon';
    this.evolve = () => new Charmeleon();
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmeleon() {
    Pokemon.call(this);
    Charm.call(this);

    this.evolve = () => new Charizard();
}
Charmeleon.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard() {
    Pokemon.call(this);
    Charm.call(this);

    this.flying = true;
    this.evolve = () => this;
}
Charizard.prototype = Object.create(Pokemon.prototype);
Charizard.prototype.constructor = Charizard;

//
// -------------------------------------PIKA------------------------------------//
//

function Pika() {
    this.specie = 'Mouse Pokemon';
    this.type = 'electric';
}

function Pichu() {
    Pokemon.call(this);
    Pika.call(this);

    this.name = 'Pichu';
    this.evolve = () => new Pikachu();
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu() {
    Pokemon.call(this);
    Pika.call(this);

    this.name = 'Pikachu';
    this.evolve = () => new Raichu();
}
Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu() {
    Pokemon.call(this);
    Pika.call(this);

    this.name = 'Raichu';
    this.flying = true;
    this.evolve = () => this;
}
Raichu.prototype = Object.create(Pokemon.prototype);
Raichu.prototype.constructor = Raichu;

//
// -------------------------------------CHECK PIKA------------------------------------//
//

const pichu = new Pichu();
pichu.getPokemonType(); // => Pichu

const pikachu = pichu.evolve();
pikachu.getPokemonType(); // Pikachu
pikachu.constructor === Pikachu; // true

const raichu = pikachu.evolve();
raichu.getPokemonType(); // Raichu
raichu.constructor === Raichu; // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
raichu2 === raichu; // true

//
// -------------------------------------CHECK CHARMANDER------------------------------------//
//

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

charmander.getType(); // -> “Fire”
charmander.getType() === charmeleon.getType(); // -> true
charmeleon.getType() === charizard.getType(); // -> true

charmander.evolve().constructor === Charmeleon; // -> true
charmeleon.evolve().constructor === Charizard; // -> true

charmander.getSpecie(); // -> “Lizard Pokémon”
charmeleon.getSpecie(); // -> “Flame Pokémon”
charizard.getSpecie() === charmeleon.getSpecie(); // -> true

charmander.canFly(); // -> false
charmander.canFly() === charmeleon.canFly(); // -> true
charizard.canFly(); // -> true