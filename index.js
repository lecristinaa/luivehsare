"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue = require("./fila");
// Cria um array de alunos
var aluno = [
    {
        nome: "João",
    },
    {
        nome: "Felipe",
    },
    {
        nome: "Maria",
    },
    {
        nome: "José",
    },
    {
        nome: "Ana",
    },
    {
        nome: "Carlos",
    },
    {
        nome: "Pedro",
    },
    {
        nome: "Paulo",
    },
    {
        nome: "Lucas",
    },
    {
        nome: "Mariana",
    },
    {
        nome: "Juliana",
    },
    {
        nome: "Fernanda",
    },
    {
        nome: "Rafael",
    },
    {
        nome: "Ricardo",
    },
    {
        nome: "Jorge",
    },
    {
        nome: "Miguel",
    },
];
console.log(aluno);
console.log("\n");
// Coloca cada aluno em uma fileira aleatória
function colocarNaFila(aluno) {
    var lugares = ['0', '1', '2', '3'];
    var lugar = lugares[Math.floor(Math.random() * lugares.length)];
    aluno.nome = lugar;
    return aluno;
}
// Array de alunos nas fileiras
// Cada fileira pode ter NO MÁXIMO 5 alunos
var fileira = [
    {
        numFileira: 0,
        aluno: aluno,
    },
    {
        numFileira: 1,
        aluno: queue.create(5),
    },
    {
        numFileira: 2,
        aluno: queue.create(5),
    },
    {
        numFileira: 3,
        aluno: queue.create(5),
    },
];
// Inserindo/populando 5 alunos por fileira
function encherFileira(aluno) {
    // Anda por toda a fileira
    for (var i = 0; i < aluno.length; i++) {
        // Passa um aluno pela fileira e recebe uma aleatória
        var alunoNaFileira = colocarNaFila(aluno[i]);
        // Verifica que fileira é, colocando ele na fila
        if (alunoNaFileira.numFileira === 1) {
            queue.enqueue(aluno, fileira[1].numFileira); //Insere na fileira
            queue.dequeue(aluno); //Retira da fileira
            return;
        }
        if (alunoNaFileira.numFileira === 2) {
            queue.enqueue(aluno, fileira[2].numFileira); //Insere na fileira
            queue.dequeue(aluno); //Retira da fileira
            return;
        }
        if (alunoNaFileira.numFileira === 3) {
            queue.enqueue(aluno, fileira[3].numFileira); //Insere na fileira
            queue.dequeue(aluno); //Retira da fileira
            return;
        }
    }
}
encherFileira(aluno);
// Função main
function main() {
    // Função que chama retira todos alunos da fileira e "da tchau" para eles
    for (var i = 0; i < fileira.length; i++) {
        var salaDeAula = {
            numFileira: i,
            aluno: queue.peek(fileira)
        };
        console.log("Fileira ".concat(salaDeAula.numFileira + 1));
        for (var j = 0; j < fileira.length; j++) {
            if (queue.isEmpty(salaDeAula.aluno)) {
                return;
            }
            var alunoAtual = queue.dequeue(salaDeAula.aluno);
            console.log("".concat(alunoAtual.nome, " se levantou da cadeira ").concat(j + 1));
            console.log("Tchau ".concat(alunoAtual.nome, "!"));
            console.log("--------------------------------");
        }
        console.log("\n");
        queue.dequeue(fileira);
    }
}
main();
