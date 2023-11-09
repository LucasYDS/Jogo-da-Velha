var X = 1;
var O = 0;
var quad1 = 0;

function jogar(){
    for(i=1; i<=9; i++){
        var quad = document.getElementById('linha'+i);
        quad.innerHTML = "";
    }
    var botao = document.getElementById('botao');
    botao.innerHTML = "Reiniciar"
}
function linha(posicao){
    var jogada = document.getElementById(posicao);
    if(X ==1){
        jogada.innerHTML = "X"
        X = 0;
        O = 1;
    }else{
        jogada.innerHTML = "O"
        X = 1;
        O = 0;
    }
}