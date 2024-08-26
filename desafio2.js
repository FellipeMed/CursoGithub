// Esse desafio consiste em usar recursão,
// o desafio proposto é imprimir "chunk" usando recursão sem usar algum laço de repetição
// Por exemplo:
// se a entrada num(4) então o resultado deve ser "chunk-chunk-chunk-chunk"

var name = "Chunk" 
function chunks(n){
    let number = n
    

    if(number>1){
        name += "-chunk"
        chunks(number-1)
    }
    return name
}

console.log(chunks(4))