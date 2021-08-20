var pri = document.getElementById("num_primeiro")
var prinumero,segnumero,resultado,valor
var repetioperacao = 0        
var selecionaroperacao = 0


function digitenum(num){
    if(num == ' + '){
        selecionaroperacao = 1
    }else if(num == ' - '){
         selecionaroperacao = 2
    }else if(num == ' x '){
          selecionaroperacao = 3
    }else if(num == ' / '){
         selecionaroperacao = 4
    }else if(num == ' % '){
         selecionaroperacao = 5        
    }
    
    if((num == ' + ') || (num == ' - ') || (num == ' x ') || (num == ' / ') || (num == ' % ') ){
        valor = pri.value.substr(0,pri.value.length)
        prinumero = Number(pri.value.substr(0,(pri.value.length)))
        repetioperacao++
        if(pri.value == "NaN" + num){
            pri.value = Number(pri.value.substr(0,(pri.value.length)))
        }else if(repetioperacao == 1){
        pri.value = pri.value.substr(0,(pri.value.length)) + num
        }
      }else if(num == ' = '){
        igual(selecionaroperacao)
      }else if (segnumero != 0){
          limpar()
      }
       /*else if(num == ' = '){
        segnumero = Number(pri.value.substr((valor.length + 3),pri.value.length)) 
    if(selecionaroperacao == 1){
            resultado = prinumero + segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 2){
            resultado = prinumero - segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 3){
            resultado = prinumero * segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 4){
            resultado = prinumero / segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 5){
            resultado = (prinumero / 100) * segnumero
            pri.value = resultado
            repetioperacao = 0
        }

    }else if(num == 'limpar'){
        pri.value = ""
        prinumero = ""
        segnumero = ""
        resultado = ""
        repetioperacao = 0
        selecionaroperacao = 0

    }else if(num == 'apagar'){
        let painel = new String(pri.value)
        let string_primeironumero = new String(prinumero)
        if(painel.length == (string_primeironumero.length + 2)){
            repetioperacao = 0
            selecionaroperacao = 0
            pri.value = painel.slice(0,(painel.length - 1))
        }else{
            pri.value = painel.slice(0,(painel.length - 1))

        }
        
    }*/else{
    pri.value += num

    }
}

function igual(selecionaroperacao){
    segnumero = Number(pri.value.substr((valor.length + 3),pri.value.length)) 
    if(selecionaroperacao == 1){
            resultado = prinumero + segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 2){
            resultado = prinumero - segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 3){
            resultado = prinumero * segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 4){
            resultado = prinumero / segnumero
            pri.value = resultado
            repetioperacao = 0
        }else if(selecionaroperacao == 5){
            resultado = (prinumero / 100) * segnumero
            pri.value = resultado
            repetioperacao = 0
        }
}

function apagar(){
    let painel = new String(pri.value)
    let string_primeironumero = new String(prinumero)
    if(painel.length == (string_primeironumero.length + 2)){
        repetioperacao = 0
        selecionaroperacao = 0
        pri.value = painel.slice(0,(painel.length - 1))
    }else{
        pri.value = painel.slice(0,(painel.length - 1))

    }
}

function limpar(){
    pri.value = ""
    prinumero = ""
    segnumero = ""
    resultado = ""
    repetioperacao = 0
    selecionaroperacao = 0
}


