/*## 1. Maior entre dois números

let numero1= Number(prompt("Informe um número"))
let numero2= Number(prompt("Informe mais um número"))
if(numero1 > numero2){
    alert("Número 1 informado é maior que número 2")
}else{
    alert("Número 2 informado é maior que número 1")
}*/

/*## 2. Número positivo ou negativo

let numero= Number(prompt("Informe um número"))
let resultado= numero >0? "Positivo": "Negativo"
alert(resultado)
*/

/*## 3. Identificação de sexo
let sexo = prompt("Informe seu gênero, F para feminino, M para masculino").toLowerCase()
switch (sexo) {
    case "f": alert("Feminino")
        break
    case "m": alert("Masculino")
        break
    default: alert("Sexo inválido")
}*/

/*## 4. Vogal ou consoante

let letra= prompt("Informe uma letra").toLowerCase()
switch(letra){
    case "a": alert("Vogal")
    break
    case "e": alert("Vogal")
    break
    case "i": alert("Vogal")
    break
    case "o": alert("Vogal")
    break
    case "u": alert("Vogal")
    break
    default: alert("Consoante")
}*/

/*## 5. Média de notas

let nota= Number(prompt("Informe a nota do aluno"))
if(nota >=10){
    alert("Aprovado com Distinção!")
}else if(nota >=7){
    alert("Aprovado")
}else{
    alert("Reprovado")
}
*/

/*## 6. Maior de três números
let numero1= Number(prompt("Informe primeiro número"))
let numero2= Number(prompt("Informe segundo um número"))
let numero3= Number(prompt("Informe o terceiro Número"))
if (numero1 > numero2 && numero1 > numero3) {
    alert("Número 1 informado é o maior")
} else if (numero2 > numero1 && numero2 > numero3) {
    alert("Número 2 informado é o maior")
} else {
    alert("Número 3 informado é o maior")
}*/

/*## 7. Maior e menor de três números
let numero1= Number(prompt("Informe primeiro número"))
let numero2= Number(prompt("Informe segundo um número"))
let numero3= Number(prompt("Informe o terceiro Número"))
if(numero1 > numero2 && numero1 > numero3){
    alert(" O maior número digitado foi " + numero1)
}else if(numero2 > numero1 && numero2 > numero3){
    alert("O maior número digitado foi " + numero2)
}else if(numero3 > numero1 && numero3> numero2){
    alert("O maior número digitado foi " + numero3)
}else{
    alert("Resposta Inválida")
}
if(numero1 < numero2 && numero1 < numero3){
    alert("O menor número digitado foi " + numero1)
}else if (numero2 < numero1 && numero2 < numero3){
    alert("O menor número digitado foi " + numero2)
}else if(numero3 < numero1 && numero3 < numero2){
    alert("O menor número digitado foi " + numero3)
}else{
    alert("Resposta Inválida")
}*/


/*## 8. Produto mais barato}*/
let produto1= Number(prompt("Informe o valor do primeiro produto"))
let produto2= Number(prompt("Informe valor do segundo produto"))
let produto3= Number(prompt("Informe o valor do terceiro produto"))
let maisBarato= 
if(produto1 < produto2 && produto1 < produto3){    
}else if(produto2 < produto1 && produto2 < produto3){    
}else if (produto3 < produto1 && produto3 < produto2){
}else{
    alert("O produto de menor valor")
