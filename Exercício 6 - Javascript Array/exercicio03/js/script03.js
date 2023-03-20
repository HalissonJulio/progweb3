function num() {    
    var num = parseInt(document.getElementById("txtArea01").value);
    const numAra = new Array(1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000);
    const numRom = new Array('I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M');

    if(numAra.includes(num)){
        document.getElementById("txtArea01").value = numRom[numAra.indexOf(num)];
        document.getElementById("txtArea01").disabled=true;
    }else{
        document.getElementById("txtArea01").value = (`O número ${num} não está na lista`);
        document.getElementById("txtArea01").disabled=true;
    };
};

eraseText = (parameter) => {parameter.value = "", disabled=false}
