const phrase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let newPhrase = phrase.replace("verde", "rosa").replace("azul", "laranja");

// c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

const includesGreen = newPhrase.includes("verde");
const includesOrange = newPhrase.includes("laranja");

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”
let quote = "mas não deixe o gato sair"
newPhrase = newPhrase.replace(quote, quote.toUpperCase());

console.log(newPhrase);
console.log(includesGreen);
console.log(includesOrange);