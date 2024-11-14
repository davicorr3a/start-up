const times = ["Flamengo", "Palmeiras", "Santos", "Corinthians", "São Paulo", "Grêmio", "Internacional", "Atlético Mineiro", "Cruzeiro"];


//Adicionar elementos 
//Push - insere no final do array.
times.push("Juventude");

//unshift - Insere no começo do array
times.unshift("Ponte Preta");

//Retirar elementos
//Pop - retira elementos do final do array
times.pop();

//shift - retira elementos do começo do array
times.shift();

//Pesquisar por um elemento 
//includes - verifica se um elemento existe no array
const inclui = times.includes("Palmeiras");

//Index of
const indice = times.indexOf("Palmeiras");

//Cortar e concatenar
//Slice - cria uma cópia de uma parte do array
const melhores = times.slice(0, 4);
const piores = times.slice(-4); //referencia do fundo pra cá

//concatenando com concat - juntando 2 arrays
const sociedade = times.concat(piores, "Criciúma");

//Substituição dos elementos ou remover um grupo de elementos (substituir por nada)
//splice
const elementosRemovidos = times.splice(indice, 1, "Athletico") 

//como percorrer (iterar) os elementos do array.
//estruturas de repetição

for (let indice =0; indice < times.length; indice++) {
    const elemento = times[indice];
    console.log(elemento);
}

