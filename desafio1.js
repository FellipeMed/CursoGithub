//funcão que calcula a media de uma quantidade indefinida de argumentos
function calcMedia(){
    let arg = arguments
    var soma = 0

    for(var i = 0; i < arg.length; i++){
        soma += arg[i]
    }

    var media = soma/arg.length
    return media
}
console.log("-----------------------------------")
console.log("RESPOSTA: " + calcMedia(2, 5, 7, 1, -2))
console.log("-----------------------------------")