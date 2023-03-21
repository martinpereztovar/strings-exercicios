const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// A partir dela, execute os passos abaixo:

// a) **Remova** o excesso de espaços no final da string;

// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

// c) **Substitua** os traços `________` por “sticioso”.


console.log(`Caracteres antes da remoção de espaços: ${minhaString.length}`);
const cutting = minhaString.trim();
console.log(`Caracteres depois da remoção de espaços: ${cutting.length}`);
console.log(minhaString.replaceAll("________", "sticioso"));