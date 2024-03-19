// 1.Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

// 2.Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne =  20
let numberTwo = 10

let sum = numberOne + numberTwo

alert(sum)

// 3.Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 10

if (typeof isNumber == 'number'){
    alert('É um número')
} else {
    alert('Não é um número')
}
// 4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = 10

if(typeof isString == "string"){
    alert('é uma string')
} else {
    alert('Não é uma string')
}

// 5.Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = true

if(typeof isBoolean == "boolean"){
    alert('É um booleano')
} else {
    alert('Não é um booleano')
}

// 6.Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let numberFive = 5
let numberTen = 10

let sub = numberFive - numberTen

alert(sub)

// 7.Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const numberSix = 6
const numberEighteen = 18

const multi = numberSix * numberEighteen

alert(multi)

// 8.Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numberEighty = 80
let numberEigth = 8

let div = numberEighty / numberEigth

alert(div)

// 9.Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const evenNumber = 15

if (evenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const oddNumber = 18

if (oddNumber % 2 != 0){
    alert('é um número ímpar')
} else{
    alert('Não é um número ímpar')
}