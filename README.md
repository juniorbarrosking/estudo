# estudo
Meu estudo de programação javascript

*** Tipos Primitivos ***

Em JavaScript, os tipos primitivos são os tipos de dados básicos que são diretamente suportados pela linguagem e não são objetos. Existem seis tipos primitivos em JavaScript:

Número (Number): Representa valores numéricos, incluindo inteiros e números de ponto flutuante. Por exemplo: 42, 3.14.

String: Representa sequências de caracteres. Uma string é delimitada por aspas simples ('') ou aspas duplas (""). Por exemplo: 'Olá', "Mundo".

Booleano (Boolean): Representa um valor verdadeiro ou falso. Os valores booleanos são true (verdadeiro) e false (falso).

Nulo (Null): Representa um valor nulo ou vazio. Em JavaScript, null é um valor atribuído a uma variável quando não há nenhum valor ou objeto disponível.

Indefinido (Undefined): Representa uma variável que foi declarada, mas ainda não recebeu um valor. Quando uma variável é declarada, mas não inicializada, seu valor é undefined.

Esses tipos primitivos são usados para armazenar valores simples e são passados por valor quando são atribuídos a variáveis ou passados como argumentos de função.

*** Operadores aritméticos ***

Em JavaScript, os operadores aritméticos são utilizados para realizar operações matemáticas em valores numéricos. Eles permitem que você realize cálculos como adição, subtração, multiplicação, divisão, entre outros. Abaixo estão os principais operadores aritméticos em JavaScript:

Adição (+): Utilizado para somar dois valores. Exemplo: 3 + 5 resulta em 8.

Subtração (-): Utilizado para subtrair um valor de outro. Exemplo: 7 - 2 resulta em 5.

Multiplicação (*): Utilizado para multiplicar dois valores. Exemplo: 4 * 3 resulta em 12.

Divisão (/): Utilizado para dividir um valor pelo outro. Exemplo: 10 / 2 resulta em 5.

Módulo (%): Retorna o resto da divisão de um valor pelo outro. Exemplo: 10 % 3 resulta em 1, pois o resto da divisão de 10 por 3 é 1.

Incremento (++): Utilizado para aumentar o valor de uma variável em 1. Exemplo: let contador = 5; contador++; resulta em contador igual a 6.

Decremento (--): Utilizado para diminuir o valor de uma variável em 1. Exemplo: let contador = 5; contador--; resulta em contador igual a 4.

Além desses operadores, também existem operadores de atribuição combinados com aritméticos, como +=, -=, *=, /=, que permitem realizar a operação aritmética e atribuir o resultado à mesma variável.

É importante considerar a precedência dos operadores ao escrever expressões aritméticas mais complexas. Caso necessário, é possível utilizar parênteses para controlar a ordem de avaliação das operações.

*** Condicionais ***

As condicionais em JavaScript são estruturas de controle que permitem que um bloco de código seja executado ou ignorado com base em uma condição booleana (verdadeira ou falsa). As condicionais são usadas para tomar decisões lógicas no código, permitindo que diferentes ações sejam executadas com base em diferentes situações.

Existem várias estruturas condicionais em JavaScript, sendo as principais:

if: A estrutura if permite executar um bloco de código se uma condição for verdadeira. É possível utilizar o if sozinho ou combiná-lo com outras estruturas condicionais.



if (condicao) {
   // Bloco de código a ser executado se a condição for verdadeira
}


if-else: A estrutura if-else permite executar um bloco de código se a condição for verdadeira e outro bloco de código se a condição for falsa.



if (condicao) {
   // Bloco de código a ser executado se a condição for verdadeira
} else {
   // Bloco de código a ser executado se a condição for falsa
}


else-if: A estrutura else-if permite testar várias condições encadeadas antes de chegar ao else. Ela é usada quando há mais de duas opções possíveis.



if (condicao1) {
   // Bloco de código a ser executado se a condição1 for verdadeira
} else if (condicao2) {
   // Bloco de código a ser executado se a condicao2 for verdadeira
} else {
   // Bloco de código a ser executado se nenhuma das condições anteriores for verdadeira
}


switch-case: A estrutura switch-case é usada quando se deseja testar uma variável em diferentes valores. Ela compara o valor da variável com cada caso e executa o bloco de código correspondente ao caso que corresponder ao valor.



switch (variavel) {
   case valor1:
      // Bloco de código a ser executado quando a variavel for igual a valor1
      break;
   case valor2:
      // Bloco de código a ser executado quando a variavel for igual a valor2
      break;
   default:
      // Bloco de código a ser executado quando nenhum dos casos anteriores for verdadeiro
}


As condicionais são uma parte fundamental da lógica de programação e permitem que o código tome decisões dinamicamente com base em diferentes situações. Elas ajudam a controlar o fluxo de execução do programa e a personalizar a lógica de acordo com os requisitos específicos.
