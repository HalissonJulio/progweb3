/*1. Crie um array que contenha uma informação qualquer de sua escolha, como por exemplo: cores,
times, comidas etc. Para cada item do array, imprima na tela “Minha escolha 1 é azul” , Minha escolha 2 é
vermelho”, etc.*/

function onibusMarca() {
    const marcaChassiOnibus = new Array("Caio", "Marcopolo", "Mascarello", "Busscar", "Comil", "Neobus", "Volare");

    for(i=0;i < marcaChassiOnibus.length; i++) {
        document.write(`Minha escolha ${i+1} é ${marcaChassiOnibus[i]} <br>`);
    };
};