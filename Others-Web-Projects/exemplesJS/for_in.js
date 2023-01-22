const aluno = {
    nome: 'João',
    sobrenome: 'da Silva',
    idade: 20,
    peso: 80
}

for (const dado in aluno) {
    console.log(dado, aluno[dado]);
}