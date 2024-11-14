const pacientes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gustavo"];
escolha = prompt ("Pacientes disponíveis:\n" + pacientes + "\n O que deseja fazer? \n1)Novo paciente \n2)Consultar paciente");

switch (escolha) {
    case "1": 
        novopac = prompt("insira o nome do novo paciente");
        pacientes.push(novopac);
        alert ("o novo paciente foi inserido.\n Essa é a nova lista de pacientes:\n" + pacientes);
        break;

    case "2": 
        pacientes.pop;
        alert ("Paciente consultado foi removido.\n Essa é a nova lista de pacientes:\n" + pacientes);
        break;
}