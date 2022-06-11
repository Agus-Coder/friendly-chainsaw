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