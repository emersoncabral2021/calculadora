var pri = document.getElementById("num_primeiro")
var prinumero,segnumero,resultado,valor
var repetiope = 0
function digitenum(num){
    if((num == ' + ') || (num == ' - ') || (num == ' x ') || (num == ' / ') || (num == ' % ') ){
        valor = pri.value.substr(0,pri.value.length)
        prinumero = Number(pri.value.substr(0,(pri.value.length)))
        repetiope++
        if(pri.value == "NaN" + num){
            pri.value = Number(pri.value.substr(0,(pri.value.length)))
        }else if(repetiope == 1){
        pri.value = pri.value.substr(0,(pri.value.length)) + num
        }
      }else if(num == ' = '){
        segnumero = Number(pri.value.substr((valor.length + 3),pri.value.length)) 
        
        resultado = prinumero + segnumero
        console.log(resultado)

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
