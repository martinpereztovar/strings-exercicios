// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3
  
    
// Você deve usar apenas um `console.log()` para isso

const name1 = prompt("Digite seu nome:")
const comida1 = prompt("Digite uma das suas comidas favoritas:")
const comida2 = prompt("Digite outra das suas comidas favoritas:")
const comida3 = prompt("Digite outra das suas comidas favoritas:")

console.log(`Estas são as comidas favoritas de ${name1}:\n- ${comida1} \n- ${comida2}\n- ${comida3}`);