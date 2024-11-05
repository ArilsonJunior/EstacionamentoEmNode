const prompt = require("prompt-sync")();

class OpracoesEstacionamento {
    constructor() {
        this.veiculos = [];
    }

    adicionarVeiculo() {
        const placa = prompt("Digite a placa do carro: ");
        if (placa) {
            this.veiculos.push(placa);
            console.log(`Veículo com placa ${placa} adicionado.`);
        } else {
            console.log("Placa inválida.");
        }
    }

    removerVeiculo() {
        const placa = prompt("Digite a placa do carro a ser removido: ");
        const index = this.veiculos.indexOf(placa);
        if (index !== -1) {
            const horasPermanecidas = parseFloat(prompt("Quantas horas permaneceu no estacionamento? "));
            const valorTotal = this.cobrar(horasPermanecidas);
            this.veiculos.splice(index, 1);
            console.log(`Veículo com placa ${placa} removido. Total a pagar: R$${valorTotal.toFixed(2)}`);
        } else {
            console.log("Veículo não encontrado.");
        }
    }

    listarVeiculos() {

        if (this.veiculos.length === 0) {
            console.log("Não possui carros estacionados");
        }
        else {
            console.log("Lista de Carros");

            this.veiculos.forEach((placa, index) => {
                console.log(`[${index + 1}] placa: ${placa}`);
            });
        }
    }

    cobrar(horasPermanecidas) {

        const valorParaEsstacionar = 3.00;

        const valorPorHora = 5.00;

        return valorParaEsstacionar + (valorPorHora * horasPermanecidas);
    }

}

const OperacoesEstacionamento1 = new OpracoesEstacionamento();

let sair = false
do {
    console.log("______________________\n" +
        "        TABELA        \n" +
        "______________________\n" +
        "1- Cadastrar Veiculo. \n" +
        "______________________\n" +
        "2- Remover Veiculo.   \n" +
        "______________________\n" +
        "3- Lista de Veículos. \n" +
        "______________________\n" +
        "4- Encerrar.          \n" +
        "______________________\n");

        const escolha = parseInt(prompt("Escolha uma opção: "), 10);

    switch (escolha) {
        case 1:
            OperacoesEstacionamento1.adicionarVeiculo();
            break;
        case 2:
            OperacoesEstacionamento1.removerVeiculo();
            break;
        case 3:
            OperacoesEstacionamento1.listarVeiculos();
            break;
        case 4:
            console.log("Encerrando Programa.")
            sair = true;
            break;
        default:
            console.log("Opção invalida.");
            break;
    }
} while (!sair)