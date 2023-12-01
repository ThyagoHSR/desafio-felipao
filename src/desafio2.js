
let result = rankedMatches(50, 30);

function rankedMatches(victory, loses) {
    let calculateMatches = victory - loses;
    let result = calculateMatches;
    let ranked = "";

    if (result <= 10) {
        ranked = 'Ferro';
    } else if (result <= 20) {
        ranked = 'Bronze';
    } else if (result <= 50) {
        ranked = 'Prata';
    } else if (result <= 80) {
        ranked = 'Ouro';
    } else if (result <= 90) {
        ranked = 'Diamante';
    } else if (result <= 100) {
        ranked = 'Lendário';
    } else if (result >= 101) {
        ranked = 'Imortal';
    } else {
        console.log('Tipo de valor incorreto.');
        return;
    }
    console.log("O Herói tem um saldo de " + result + " está no nível de " + ranked);
    return ranked;
}
