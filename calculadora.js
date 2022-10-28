
var captar = 0
function chamar(){
    captar = document.getElementById('nome').value;
    document.getElementById('nomecarro').innerHTML = captar;
}

var captar2 = 0
function chamar2(){
    captar2 = document.getElementById('valor').value;
    document.getElementById('valorbruto').innerHTML = captar2;
}

var captar3 = 0
function chamar3(){
    captar3 = document.getElementById('parcela').value;
    document.getElementById('qtdeparcelas').innerHTML = captar3;
}

var valorfinal = 0;
function calcular(){
    
    juros = 0.1;
    tempo = captar3/12;
    valorfinal = captar2*(1+juros)**tempo;
    mensal= valorfinal/captar3;
    alert("O valor com juros é:" + valorfinal.toFixed(2) + "\nO valor mensal é: " + mensal.toFixed(2));
    
    document.getElementById('final').innerHTML = valorfinal.toFixed(2);
    document.getElementById('mensal').innerHTML = mensal.toFixed(2);

    

}

