const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
} 

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Médica
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materiais: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Médica,
    materiais: ['Matemárica', 'Química']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materiais: ['Matemárica', 'Química']
}

function listar(lista: string[]) {
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materiais);