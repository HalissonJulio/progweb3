const divA = document.createElement('div');
const btnA = document.createElement('button');
divA.appendChild(btnA);
divA.setAttribute('id', 'divA');
btnA.setAttribute('id', 'btnA');
btnA.appendChild(document.createTextNode('Adicionar aluno'));
document.body.appendChild(divA);
divA.style.display='none';

const divP = document.createElement('div');
const btnP = document.createElement('button');
divP.appendChild(btnP);
divP.setAttribute('id', 'divP');
btnP.setAttribute('id', 'btnP');
btnP.appendChild(document.createTextNode('Adicionar professor'));
document.body.appendChild(divP);
verdade = "professor";
divP.style.display='none';


criarDivA = () => {
    if (divA.style.display=='none') {
        divA.style.display = 'block'
    }
    else {
        divA.style.display = 'none'
    }
}

criarDivP = () => {
    if (divP.style.display=='none') {
        divP.style.display = 'block'
    }
    else {
        divP.style.display = 'none'
    }
}
