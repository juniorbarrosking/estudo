/*
  Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

  multiplicador x número = resultado
  multiplicador x 0 = resultado
  multiplicador x 1 = resultado
  multiplicador x 2 = resultado
  multiplicador x 3 = resultado
  ...
  multiplicador x 10 = resultado

  Obs.: não podemos criar varios consoles.log(multiplicador x 3 = resultado)
*/

let multiplicador = 5
let contador = 0

for(contador; contador <= 10; contador++) {
    console.log(`${contador} X ${multiplicador} = ${multiplicador * contador}`)
}
