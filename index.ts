import { Aluno, Fileira } from "./types"
import * as queue from "./fila";


// Cria um array de alunos
const aluno : Aluno[] = [
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
]

// Coloca cada aluno em uma fileira aleatória
function colocarNaFila(aluno: Aluno) {
  const lugares = ['0', '1', '2', '3']
  const lugar = lugares[Math.floor(Math.random() * lugares.length)]
  aluno.nome = lugar
  return aluno
}

// Array de alunos nas fileiras
// Cada fileira pode ter NO MÁXIMO 5 alunos
const fileira: Fileira[] = [
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
]

// Inserindo/populando 5 alunos por fileira
function encherFileira(aluno: Aluno[]) {
  // Anda por toda a triagem
  for (let i = 0; i < aluno.length; i++) {

      // Passa um aluno pela fileira e recebe uma
      const alunoNaFileira = colocarNaFila(aluno[i])

      // Verifica que fileira é, colocando ele na fila
      if(alunoNaFileira.numFileira === 1){
          queue.enqueue(aluno, fileira[1].numFileira) //Insere na fileira
          queue.dequeue(aluno) //Retira da fileira
          return
      }

      if(alunoNaFileira.numFileira === 2){
        queue.enqueue(aluno, fileira[2].numFileira) //Insere na fileira
        queue.dequeue(aluno) //Retira da fileira
        return
    }

    if(alunoNaFileira.numFileira === 3){
      queue.enqueue(aluno, fileira[3].numFileira) //Insere na fileira
      queue.dequeue(aluno) //Retira da fileira
      return
  }
  }
}

// Função main
function main() {
  // Função que chama retira todos alunos da fileira e "da tchau" para eles
  for (let i = 0; i < fileira.length; i++) {
    const salaDeAula: Fileira = {
      numFileira: i,
      aluno: queue.peek(fileira)
    }
    console.log(`Fileira ${salaDeAula.numFileira + 1}`)

    for (let j = 0; j < aluno.length; j++) {
      if (queue.isEmpty(salaDeAula.aluno)) {
        return
      }

      const alunoAtual = queue.dequeue(salaDeAula.aluno)

      console.log(`${alunoAtual.nome} se levantou da cadeira ${j + 1}`)
      console.log(`Tchau ${alunoAtual.nome}!`)
      console.log("--------------------------------")
      
    }
    console.log("\n")
    queue.dequeue(fileira)
  }
}
