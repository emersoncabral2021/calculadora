var painel = document.getElementById("painel")
var numerosadi = []

function digitenum(num){
    if(num == 10){
        numerosadi.pop(num)
        painel.innerHTML = numerosadi  
    }else{
    numerosadi.push(num)
    painel.innerHTML += numerosadi
    }
    numerosadi.pop(num)    

}