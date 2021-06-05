var pri = document.getElementById("num_primeiro")
var prinumero,segnumero,resultado,valor1,valor
var repetiope = 0
function digitenum(num){
    if((num == ' + ') || (num == ' - ') || (num == ' x ') || (num == ' / ') || (num == ' % ') ){
        valor1 = pri.value
        valor = valor1.substr(0,valor1.length)
        prinumero = Number(valor1.substr(0,(valor1.length)))
        console.log(valor)
        repetiope++
        if(pri.value == "NaN" + num){
            pri.value = Number(valor1.substr(0,(valor1.length)))
        }else if(repetiope == 1){
        pri.value = valor1.substr(0,(valor1.length)) + num
        }
      }else if(num == ' = '){
        
    }else if(num == 'limpar'){
        pri.value = ""

    }else{
    pri.value += num

    }


    
}




/*if(num == ' + '){
    operação.innerHTML = num
    prinumero = pri.value
}else if (num == ' = '){
    prinumero = Number(pri.value) 
    segnumero = 8
    resultado = prinumero + segnumero
    console.log(resultado)
}else{
        pri.value += num

}
*/  
