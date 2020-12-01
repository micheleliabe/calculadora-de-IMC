//Define o que acontece ao clicar no botão de calcular

buttonElementCalc = document.querySelector("#btnCalc")

buttonElementCalc.onclick = function calc(){
    //Recebe os valores dos inputs e armazena nas variaveis
   
    var altura = document.querySelector("#altura").value
    var peso = document.querySelector("#peso").value
    
    //Formula para calculo do IMC
    var resultado = (peso / (altura * altura)).toFixed(1)
    

    var detalhes = ""
    detalhes = document.querySelector("#detalhes")

    if(resultado < 18.5){ 
        console.log(resultado)
        detalhes.innerText = "Seu IMC é menor que 18.5 este valor é classificado como MAGREZA. Seu grau de obesidade é 0. Verifique se sua dieta possui todos os nutrientes que o seu corpo precisa"
        document.querySelector("#imgLogo").src = "./assets/healthy-eating.svg"
        exibeDados();

    }else if (resultado <= 24.9){

        console.log(resultado)
        detalhes.innerText = "Parabéns ! Seu IMC esta entre 18.5 e 24.9 este valor é classificado como NORMAL. Seu grau de obesidade é 0. Continue se alimentando bem e praticando exercicios "
        document.querySelector("#imgLogo").src = "./assets/happiness.svg"
        exibeDados();

    }else if (resultado <= 29.9){

        console.log(resultado)
        detalhes.innerText = "Cuidado ! Seu IMC esta entre 25.0 e 29.9 este valor é classificado como SOBREPESO. Seu grau de obesidade é I. Tente cortar alimentos calóricos e praticar alguma atividade física"
        document.querySelector("#imgLogo").src = "./assets/excercise.svg"
        exibeDados();

    }else if(resultado <= 39.9){

        console.log(resultado)
        detalhes.innerText = "Hey! Seu IMC esta entre 30.0 e 39.9 este valor é classificado como OBESIDADE. Seu grau de obesidade é II. Adote uma alimentação de baixo teor calórico e pratique atividades físicas"
        document.querySelector("#imgLogo").src = "./assets/excercise.svg"
        exibeDados();

    }else if(resultado > 40){

        console.log(resultado)
        detalhes.innerText = "Atenção ! Seu IMC é maior que 40 este valor é classificado como OBESIDADE GRAVE. Seu grau de obesidade é III. Adote uma alimentação de baixo teor calórico e pratique atividades físicas | Ah ! vê se não esquece de falar com um nutricionista"
        document.querySelector("#imgLogo").src = "./assets/excercise.svg"
        exibeDados();
    }


    function exibeDados(){
        document.querySelector("#textResultado").value = resultado
        document.querySelector("#resultado").style.display = "flex"
        document.querySelector("#app").style.display = "none"
    }
   

}

buttonElementClear = document.querySelector("#clear")
buttonElementClear.onclick = function clear(){
    document.querySelector("#resultado").style.display = "none"
    document.querySelector("#app").style.display = "flex"

    document.querySelector("#nome").value = ""
    document.querySelector("#altura").value = ""
    document.querySelector("#peso").value = ""
    document.querySelector("#imgLogo").src = "./assets/weight-loss.svg"

}


