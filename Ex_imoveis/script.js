let imovel = {};
let imoveiscadastrados = [];


do {
    fazer = prompt("Imóveis cadastrados: " + imoveiscadastrados.length + ". O que deseja?\n 1) Salvar imóvel\n E2)xibir imóveis salvos");
    switch (fazer) {
        case "1":
            let proprietario = prompt("insira o nome do proprietário");
            let qtd_quartos = prompt("insira a quantidade de quartos");
            let qtd_banheiros = prompt("insira a quantidade de banheiros");
            let garagem = prompt("deseja garagem?");

            imovel.proprietario = proprietario;
            imovel.qtd_quartos = qtd_quartos;
            imovel.qtd_banheiros = qtd_banheiros;
            imovel.garagem = garagem;

            imoveiscadastrados.push(imovel);

            alert("Imóvel cadastrado com sucesso");

            break;

        case "2":
            if (imoveiscadastrados.length == 0) {
                alert("Não há imóveis cadastrados");
            }
            else {
                for (let i = 0; i < imoveiscadastrados.length; i++) {
                    alert("Imóvel número " + (1 + i) + "Garagem: " + imoveiscadastrados[i].garagem + "\nProprietário: " + imoveiscadastrados[i].proprietario +
                        "\n Quantidade de quartos: " + imoveiscadastrados[i].qtd_quartos + "\n Quantidade de banheiros: " + imoveiscadastrados[i].qtd_banheiros);
                }

            }
    }
} while (fazer !== 3); 