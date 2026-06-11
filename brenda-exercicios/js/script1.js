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

/*## 7. Maior e menor de três números}
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
    alert("Resposta Inválida")}*/



/*## 8. Produto mais barato
let produto1 = Number(prompt("Informe o valor do primeiro produto"))
let produto2 = Number(prompt("Informe valor do segundo produto"))
let produto3 = Number(prompt("Informe o valor do terceiro produto"))
let maisBarato
if (produto1 < produto2 && produto1 < produto3) {
    maisBarato = produto1
    alert("Você deve comprar o produto 1 que custa " + maisBarato)
} else if (produto2 < produto1 && produto2 < produto3) {
    maisBarato = produto2
    alert("Você deve comprar o  o produto 2 que custa " + maisBarato)
} else if (produto3 < produto1 && produto3 < produto2) {
    maisBarato = produto3
    alert("Você deve comprar o  o produto 3 que custa " + maisBarato)
} else {
    alert("Valores inválidos")
}*/

/*## 9. Ordem decrescente

let numero1 = Number(prompt("Informe primeiro número"))
let numero2 = Number(prompt("Informe segundo um número"))
let numero3 = Number(prompt("Informe o terceiro Número"))
if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        alert(numero1 + ", " + numero2 + ", " + numero3)
    } else {
        alert(numero1 + ", " + numero3 + ", " + numero2)
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        alert(numero2 + ", " + numero1 + ", " + numero3)
    } else {
        alert(numero2 + ", " + numero3 + ", " + numero1)
    }
} else {
    if (numero1 >= numero2) {
        alert(numero3 + ", " + numero1 + ", " + numero2)
    } else {
        alert(numero3 + ", " + numero2 + ", " + numero1)
    }
}
*/

/*## 10. Turno de estudo
let turno = (prompt("Informe seu turno, M para matutino, V para vespertino, N para noturno")).toLowerCase()
switch(turno)
{
case "n": alert("Boa noite!")
break
case "m": alert("Bom dia!")
break
case "v": alert("Boa tarde!")
break
default: alert("Turno inválido")
}

/*## 11. Reajuste salarial
let salario = Number(prompt("Informe o valor do seu sálario:"))
let novoSalario
let aumento

if (salario <= 280) {
    
    aumento = salario * 0.20
    novoSalario = salario + aumento
    alert("Seu salário era " + salario + ", teve um reajuste de 20% aumento de " + aumento + " reais. Seu novo salário é " + novoSalario + " reais.")

} else if (salario <= 700) {
    
    aumento = salario * 0.15
    novoSalario = salario + aumento
    alert("Seu salário era " + salario + ", teve um reajuste de 15% aumento de " + aumento + " reais. Seu novo salário é " + novoSalario + " reais.")

} else if (salario <= 1500) {
    
    aumento = salario * 0.10
    novoSalario = salario + aumento
    alert("Seu salário era " + salario + ", teve um reajuste de 10% aumento de " + aumento + " reais. Seu novo salário é " + novoSalario + " reais.")
} else {
    
    aumento = salario * 0.05
    novoSalario = salario + aumento
    alert("Seu salário era " + salario + ", teve um reajuste de 5% aumento de " + aumento + " reais. Seu novo salário é " + novoSalario + " reais.")
}*/
/*## 12. Folha de pagamento*/

/*## 13. Dia da semana
let diaDaSemana = Number(prompt("Digite um número de 1 a 7 para saber o dia da semana"))
switch(diaDaSemana){
    case 1: alert("1-Domingo")
    break
    case 2: alert("2- Segunda")
    break
    case 3: alert("3- Terça")
    break
    case 4: alert("4- Quarta")
    break
    case 5: alert("5- Quinta")
    break
    case 6: alert("6- Sexta")
    break
    case 7: alert("7- Sábado")
    break
    default: alert("Número inválido")
}*/

/*## 21. Maior e menor entre dois números
let numero1 = Number(prompt("Informe primeiro número"))
let numero2 = Number(prompt("Informe segundo um número"))

if (numero1 > numero2) {
    alert("O maior número é o primeiro digitado " + numero1)
} else if (numero2 > numero1) {
    alert("O maior número é o segundo digitado " + numero2)
}else{
    alert("Resposta inválida")
}*/

