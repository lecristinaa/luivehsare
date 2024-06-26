export interface Aluno { // Cada aluno é desse tipo
    nome: string;
    numFileira?: number
}
export interface Fileira { // Cada fileira tem um nome/número na sala e tem os alunos que estão nela
    numFileira: number;
    aluno: Aluno[];
    // Nome/Número da Fileira
    // Alunos na fileira
}