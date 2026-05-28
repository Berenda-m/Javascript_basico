//Exercicio 1- Operadores aritiméticos
{
    //Calculadora simples 1
    let numero1 = 70;
    let numero2 = 14;
    let soma = (numero1 + numero2);
    console.log(soma);
}

{
    //subtração
    let numero1 = 55;
    let numero2 = 31;
    let soma = (numero1 - numero2)
    console.log(soma)
}

{
    //multiplicação
    let numero1 = 84;
    let numero2 = 24;
    let soma = (numero1 * numero2)
    console.log(soma)
}

{
    //divisão
    let numero1 = 21;
    let numero2 = 3;
    let soma = (numero1 / numero2);
    console.log(soma)
}


{
    //Resto da divisão 2
    let numero = 86;
    let resto = (numero % 2);
    let resultado = resto === 0;
    console.log(resultado);
}

{
    //potencia ao quadrado 3
    let numero1 = 4;
    let numero2 = 2;
    let resultado = (numero1 ** numero2);
    console.log(resultado);
}

{
    //potencia ao cubo
    let numero1 = 4;
    let numero2 = 3;
    let resultado = (numero1 ** numero2)
    console.log(resultado);
}


{
    //temperatura 4
    let celsius = 16;
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(fahrenheit);
}

{
    //média aritimética 5
    let nota1 = 9;
    let nota2 = 7;
    let nota3 = 5;
    let media = (nota1 + nota2 + nota3) / 3;
    console.log(media.toFixed(2));
}

{
    //calculo de troco 6
    let produto = 12.99;
    let pago = 50;
    let troco = (pago - produto);
    console.log(troco);
}

//Exercicios 2-Operadores de comparação
{ //== valor igual? 7
    let numero1 = 72; //não tem aspas, é valor
    let numero2 = 14; //não tem aspas, é valor
    let resultado = (numero1 == numero2);
    console.log(resultado);//falso, eles não são iguais em valor, um é 72 e outro 14
}

{ //==== valor e tipo igual? 
    let numero1 = "72"; //tem aspas, não é valor, é string
    let numero2 = "72"; //tem aspas, não é valor, é string
    let resultado = (numero1 == numero2);
    console.log(resultado);//verdadeiro, eles são iguais em valor e tipo
}

{
    //> Maior 8
    let numero1 = 8;
    let numero2 = 5;
    let resultado = (numero1 > numero2); // 8 é maior que 5? sim
    let resultado2 = (numero1 < numero2); // 8 é menor que 5? não
    console.log(resultado, resultado2);
}

{
    //aprovado ou reprovado 9
    let nota = 8.9;
    console.log(nota >= 7); //nota é maior que sete? se sim é verdadeiro.
}

{ //verificação de idade 10
    let idade = 17;
    console.log(idade >= 18); //idade é maior ou igual que 18?
}

{
    //comparação de strings 11
    let number = "Ana"
    let name = "ana";
    console.log(number !== name) //letras diferentes me dá um resultado de diferença
}

{
    //faixa de preço 12
    let preço = 52;
    console.log(preço >= 10 && preço <= 100); //o let é maior que 10 e menor que 100? sim
}
//Operadores lógicos
{ //13
    let numero = 13;
    let resto = (numero % 2);
    let resultado = resto === 0;
    console.log(resultado && numero > 0) //13 é par? não. é positivo, sim precisa ser par e positivo.
}

{//14
    let name = "admin";
    console.log(name === "admin" || name === "root"); //um dos nomes tá certo?
}

{//15
    let logado = true;
    console.log(!logado) // ! inverte a informação
}

{//16
    let idade = 18;
    let email = "joao@gmail.com";
    console.log(idade >= 18 && email != ""); //tem mais de 18 anos e email?
}

{//17
    let assinante = false;
    let preço = 159.70;
    console.log(assinante || preço >= 200);
}

{//18
    let idade = 22;
    let conta = true;
    let banido = true;
    console.log(idade >= 18 && conta && !banido);

}

//desafios combinados
{//19
    let numero = 6;
    let resto= numero%2;
    console.log(resto == 0 && numero >=1 && numero <=100);
}

