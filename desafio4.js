//o desafio desse codigo é elevar um numero ao quadrado, por exemplo 35, elevar ao quadrado o numero 3 e o 5 e depois concatenar e a saida ser 925.
// outro exemplo 3514, elevar ao quadrado 3, 5, 1 e 4, dessa forma a saida é 925116

// esse código abaixo é a minha solução, mais abaixo está a solução do professor
/* function square(num){
    let numero = num.toString()
    let numString = []
    let numQuadrado = []
    
    for(let i = 0; i < numero.length; i++){
        
        numString [i] = numero.charAt(i)
    }

    for(let i = 0; i < numero.length; i++){
        numQuadrado[i] = parseInt(numString[i]*numString[i], 10)
    }

    numQuadrado = numQuadrado.join('')
    return numQuadrado

}
*/
// solução do professor

function square(num){
    const str = num.toString()
    let result = ""

    for (let i = 0; i < str.length; i++){
        result +=Math.pow(Number(str[i]), 2).toString()
    }

    return Number(result)
}

console.log(square(3514))
console.log(square(94571))
console.log(square(24))
console.log(square(745821698))