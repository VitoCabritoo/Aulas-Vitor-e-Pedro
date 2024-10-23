//Diferenças entre VAR, LET E CONST

//VAR
var nome = 'Adamastor';
console.log(nome);

if(nome=='Adamastor'){
    var escola = 'CESF';
    console.log(escola);
}
console.log(escola);

escola = 'Sagrada';
console.log(escola);
//com variaveis do tipo var podemos acessar (visibilidade)
//fora do escopo de criacao da variavel

//let
if(nome === 'Adamastor'){
    let curso = 'DS'
    console.log(curso);
}
//console.log(curso)
curso = 'Desenvolvimento';
console.log(curso);

//let so permite acesso a variavel no escopo onde ele foi criado (escopo de bloco)
//se redestribuirmos valor a ela é como se estivessemos declarando uma nova variavel
//do tipo var com o mesmo nome curso

//const
const cargo = 'estudante';
console.log(cargo);
//cargo = 'programador';
console.log(cargo);

//variaveis do tipo const tem escopo de bloco, com as let, mas ela nao
//permite reatribuição de valores

//criacoes de variaveis sem atribuição inicial
var aluno1;
aluno1 = 'Ana Clara';
console.log(aluno1);

let aluno2;
aluno2 = 'Bernardo';
console.log(aluno2);

//const aluno3, variaveis do tipo const nao podem ser apenas declaradas
const aluno3 = 'Cremilda';
console.log(aluno3);