//spread operator
let primeiros = [1,2,3];
let numeros = [primeiros,4,5,6];
let numeros2 = [...primeiros,4,5,6];

console.log(numeros);
console.log(numeros2);

//spreadando num objeto

let pessoa = {
    nome: 'Pedro',
    idade: 16,
    cargo: "estudante"
};

let dadosPessoa = {
    ...pessoa,
    status: 'Ativo',
    cidade: 'Campo Largo'
}

console.log(dadosPessoa)

//exemplificando de uma forma realista

function novoUsuario(info){
    //console.log(info)
    let dados = {
        ...info,
        status: 'Ativo',
        inicio: "20/09/2024",
        código: 123
    };
    console.log(dados);
    
}

novoUsuario({nome: "Admilson", sobrenome: 'Rico', cargo: 'Estágiario'});