var lista = ['aluno1', 'aluno2', 100];
//consumindo o  array
console.log(lista);

//consummindo um elemento especifico do array
console.log(lista[2]);

//descobrindo o tamanho do array
console.log(lista.length);
console.log(lista.indexOf('aluno3'));
console.log(lista.indexOf('aluno1'));

//alterar informação dentro do array 
lista[0]='Helô'
console.log(lista);
lista[1]='Lorezo';
console.log(lista);
lista[2]=3;
console.log(lista);
lista.push('Clementina');
console.log(lista);

//excluir o primeiro elemento do array
lista.shift();
console.log(lista);

//excluir o último elemento do array
lista.pop();
console.log(lista);


//retornar os elementos de dentro do array com um separador
console.log(lista.join(' / '));
