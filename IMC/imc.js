var imc = 0;
function calcular(){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    imc = peso/(altura*altura);
    document.getElementById('imc').innerHTML = imc.toFixed(2);
    if (imc <= 18.5){
        document.getElementById('class').innerHTML = "Magreza"
        document.getElementById('grau').innerHTML = "0"
    }
    else if(imc >= 18.6 && imc <= 24.9){
        document.getElementById('class').innerHTML = "Normal"
        document.getElementById('grau').innerHTML = "0"
    }
    else if(imc >= 25.0 && imc <= 29.9){
        document.getElementById('class').innerHTML = "Sobrepeso"
        document.getElementById('grau').innerHTML = "I"
    }
    else if(imc >= 30.0 && imc <= 39.9){
        document.getElementById('class').innerHTML = "Obesidade"
        document.getElementById('grau').innerHTML = "II"
    }
    else if(imc >= 40){
        document.getElementById('class').innerHTML = "Obesidade Grave"
        document.getElementById('grau').innerHTML = "III"
    }
}