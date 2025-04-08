const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Beatriz", nota: 6 },
    { nome: "Daniel", nota: 4 },
    { nome: "Eduarda", nota: 9 }
];

const filtrarAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

const aprovados = filtrarAprovados(alunos);

console.log("Alunos aprovados:");
console.log(aprovados);
