const nome1 = prompt("insira o nome do carro 1");
const velo1 = prompt("insira a velocidade do carro 1");
const nome2 = prompt("insira o nome do carro 2");
const velo2 = prompt("insira a velocidade do carro 2");

if (velo1 > velo2) {
    alert("O " + nome1 + " é mais rápido");
} else {
    alert("O " + nome2 + " é mais rápido");
}