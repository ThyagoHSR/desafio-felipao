let nomeDoHeroi = "Thyago";
let xp = 1001;
let nivel = '';

if(xp >= 10001){
    nivel = 'Radiante';
}
else if(xp >= 9001){
    nivel = 'Imortal';
}
else if(xp >= 8001){
    nivel = 'Ascendente';
}
else if(xp >= 7001){
    nivel = 'Platina';
}
else if(xp >= 5001){
    nivel = 'Ouro';
}
else if(xp >= 2001){
    nivel = 'Prata';
}
else if(xp >= 1001){
    nivel = 'Bronze';
}
else if(xp >= 1){
    nivel = 'Ferro';
}
else{
    console.log('Valor de EXP incorreto. Escreva um valor de 1000 até 10000');
}

if (nivel !== '') {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível de ' + nivel);
}
