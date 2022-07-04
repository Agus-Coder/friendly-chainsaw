function diceRoller(numberOfDices, diceDamage, modificator) {
    const valors = [];
    let rolledDice;
    for (i = 1; i <= numberOfDices; i++) {
      rolledDice = Math.floor(Math.random() * diceDamage) + 1 + modificator;
      valors.push(rolledDice);
    }
    return valors;
}

export {diceRoller};

/*
Se crea y exporta la funcion que permite arrojar X cantidad de dados, con Y caras y un modificador +Z
*/