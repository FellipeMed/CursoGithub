//o intuito desse codigo é inverter a posição do array sem usar funções nativas para array
//o codigo abaixo foi a minha solução que demorei horas pra resolver
//logo em seguida tem o codigo com a solução do professor, me sinto um burro nessas horas :`( 

function invert(...lista){
    let list = lista
    let aux1
    let aux2
    let cont
    cont = list.length-1
    
    for(var i = 0; i < list.length; i++){
        if(cont == i) break
        aux1 = list[i]
        aux2 = list[cont]
        list[cont] = aux1
        list[i] = aux2
        cont-- 
    }  
return list
}

console.log(invert("Mark", "Hi", "Oh"))

//codigo com a solução do professor

function reverse(arr){
    const reversedArray = []

    for(let i = 0; i < arr.length; i++){
        reversedArray[i] = arr[arr.length - 1 - i]
    }
    return reversedArray
}

console.log(reverse(["Mark", "Hi", "Oh"]))


