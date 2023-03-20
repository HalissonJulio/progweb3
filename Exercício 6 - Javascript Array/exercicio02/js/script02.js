/*2. Crie um array com as entradas [1,2,3,4,5] e imprima na tela o quadrado dessas entradas. Utilize a
função map do javascript para construir o código.*/

function minhaFuncao() {
    const arrayNum = new Array(1, 2, 3, 4, 5);

    quadArray = arrayNum.map((num) => Math.pow(num, 2));
    
    document.write(`Números iniciais:   ${arrayNum} <br>`);
    document.write(`Números iniciais ao quadrado:    ${quadArray}`);
}