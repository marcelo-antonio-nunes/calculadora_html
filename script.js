let display = document.querySelector('input#display')
let operacao = ''
var n_temp1 =0

let valor = display.value.substring(0, display.value.length -1)
function write_display(num){
    display.value += num
}

function deletar(){
    let valor = display.value.substring(0, display.value.length -1)
    display.value = valor

}
function resete(){
    display.value =''
    n_temp1 = 0
}

function calcular(operador){
    if (operador == '+' ){
        n_temp1 += parseFloat(display.value)
        operacao = '+'
    }else if (operador == '+' ){
        n_temp1 = parseFloat(display.value)
        operacao = '+'
    }else if (operador == '-' && n_temp1>parseFloat(display.value) ){
        n_temp1 -= parseFloat(display.value)
        operacao = '-'
    }else if (operador == '-' && n_temp1 <1){
        n_temp1 = parseFloat(display.value)
        operacao = '-'
    }else if (operador == '*' && n_temp1>0 ){
        n_temp1 *= parseFloat(display.value)
        operacao = '*'
    }else if (operador == '*' && n_temp1 <1){
        n_temp1 = parseFloat(display.value)
        operacao = '*'
    }else if (operador == '/' && n_temp1>0 ){
        n_temp1 /= parseFloat(display.value)
        operacao = '/'
    }else if (operador == '/' && n_temp1 <1){
        n_temp1 = parseFloat(display.value)
        operacao = '/'
    }
    display.value = ''
}

function resultado(){
    if(n_temp1 >= 1){

        if(operacao == '+'){
            n_temp1 += parseFloat(display.value)
        }else if(operacao == '-'){
            n_temp1 -= parseFloat(display.value)
        }else if(operacao == '*'){
            n_temp1 *= parseFloat(display.value)
        }else if(operacao == '/'){
            n_temp1 /= parseFloat(display.value)
        }
       
            display.value = n_temp1
            n_temp1 = 0
    
    }
}
