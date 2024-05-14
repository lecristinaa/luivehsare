import { Aluno, Fileira } from "./types"
import * as queue from "./fila";

const aluno : Aluno = [
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

// Array de alunos nas fileiras
// Cada fileira pode ter NO MÁXIMO 5 alunos

const sala: Fileira[] = [
  {
    fileira: "0",
    aluno: queue.create(5),
  },
  {
    fileira: "1",
    aluno: queue.create(5),
  },
  {
    fileira: "2",
    aluno: queue.create(5),
  },
];

function fileira(sala: Fileira) {
  const fileiras = ["Fileira 0", "Fileira 1", "Fileira 2", "Fileira 3"];
  const fileira =
    fileiras[Math.floor(Math.random() * fileiras.length)];

  sala.fileira = fileira;
  
  return;
}

// Inserindo/populando 5 alunos por fileira
function encherFileira(sala: Fileira[]){
  for (let i = 0; i < sala.length; i++) {
    const alunoFileira = fileira(sala[i]);

    
    if (alunoFileira.aluno === "Fileira 0") {
      queue.enqueue(alunoFileira, sala[0].aluno); // INSERE
      queue.dequeue(sala); 
      return;
    }
    if (alunoFileira.aluno === "Fileira 1") {
      queue.enqueue(alunoFileira, sala[1].aluno);
      queue.dequeue(sala);
    }
    if (alunoFileira.aluno === "Fileira 2") {
      queue.enqueue(alunoFileira, sala[2].aluno);
      queue.dequeue(sala);
    }
  }
}

// Função main
function main() {
  // Função que chama retira todos alunos da fileira e "da tchau" para eles
  function retirarAlunos (sala: Fileira []){

  }
  
  // Função que chama a fileira
}
