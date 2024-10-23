var area=document.getElementById("area")

function entrar(){
    //alert("Clicou");
    var nome =prompt('Digite seu nome');
    area.innerHTML='Bem vindo '+nome+' ';

    //Criando um botão dentro do html a partir do js
    let botaoSair = document.createElement('button')
    botaoSair.innerHTML =  'Sair da conta';

    area.appendChild (botaoSair);
}