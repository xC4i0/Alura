alert('Boas vindas ao jogo do número secreto');

let numberTyped;
let numberSecret = parseInt(Math.random() * 100 + 1);
let attempts = 1;

while (numberTyped != numberSecret) {
    numberTyped = prompt('Digite um número de 1 a 100: ')
    if (numberTyped == numberSecret) {
        break;
    } else {
        if (numberSecret > numberTyped) {
            alert(`O número secreto é maior que ${numberTyped}`);
        } else {
            alert(`O número secreto é menor que ${numberTyped}`);
        }
        // attempts = attempts + 1;
        attempts++
    }   
}

//Forma simplificada de escrever if e else.
let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou! o número secreto ${numberSecret}, Com ${attempts} ${wordAttempts}`);


// Desafio, troque o valor de 1 a 100 e trocar na linha 8 automaticamente


/*
    DESAFIOS PROPOSTO

1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
------------------------------------
    console.log('Boas-vindas');

2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
------------------------------------
    const nome = 'Caio';
    console.log(`Olá, ${nome}`);

3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
------------------------------------
    const nome = 'Caio';
    alert(`Olá, ${nome}`);

4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
------------------------------------
    const leanguage = prompt('Qual linguagem de programação você mais gosta?');
    alert(`A sua linguagem preferida é ${leanguage}`);

5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
------------------------------------
    const valor1 = 23;
    const valor2 = 54;

    resultado = valor1 + valor2;
    console.log(`A soma do valor ${valor1} e do valor ${valor2} é de = ${resultado}`);

6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
------------------------------------
    const valor1 = 65;
    const valor2 = 12;

    resultado = valor1 - valor2;
    console.log(`A subtração do valor ${valor1} e do valor ${valor2} é de = ${resultado}`);


7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
------------------------------------
    const age = prompt('Digite a sua idade: ')
    if (age >= 18) {
        alert('Você é maior de IDADE!')
    } else {
        alert('Você é menor de IDADE!')
    }
    

8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
------------------------------------
    let number = prompt('Insira um número aleatorio, vamos verificar se ele é positivo, negativo ou zero: ')
    if (number < 0) {
        alert('Número Negativo')
    } else if (number == 0) {
        alert('Seu número é 0')
    } else {
        alert('Número Positivo')
    }

9. Use um loop while para imprimir os números de 1 a 10 no console.
------------------------------------
    let number = 1

    while (number <= 10) {
        console.log(number)
        number++
    }

10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
------------------------------------
    const nota = 8

    if(nota >= 7) {
        alert(`Você foi APROVADO com ${nota} em sua nota`)
    } else {
        alert(`Você foi REPROVADO, não atingiu a nota minima de ${nota}`)
    }

11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
------------------------------------
   const number = Math.random ()
    alert(number)

12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
------------------------------------
    const number = parseInt(Math.random () * 10 + 1)
    alert(number)

13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
------------------------------------
    const number = parseInt(Math.random () * 1000 + 1)
    alert(number)
*/


/*
    DESAFIOS PROPOSTO

1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
------------------------------------
    let n1 = 1

    while (n1 <= 10) {
        console.log(n1)
        n1++
    }

2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
------------------------------------
    let n1 = 10

    while (n1 >= 0) {
        console.log(n1)
        n1--
    }

3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
------------------------------------
    let numberTyped = prompt('Digite um número qualquer')

    while (numberTyped >= 0) {
        console.log(numberTyped)
        numberTyped--
    }

4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
------------------------------------
    let numberTyped = prompt('Digite um número pra contagem: ')
let firstNumber = 0

while (firstNumber <= numberTyped) {
    console.log(firstNumber)
    firstNumber++
}
*/

/*
    DESAFIOS PROPOSTO

1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
------------------------------------
    alert('"Boas vindas ao nosso site!"')

2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
------------------------------------
    const name = 'lua'

3. Crie uma variável chamada idade e atribua a ela o valor 25.
------------------------------------
    const idade = 25

4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
------------------------------------
    const numeroDeVendas = 50

5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
------------------------------------
    const saldoDisponivel = 1000

6. Exiba um alerta com o texto "Erro! Preencha todos os campos" 
------------------------------------ 
    alert("Erro! Preencha todos os campos");

7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
------------------------------------
    const mensagemDeErro = "Erro! Preencha todos os campos"
    alert(mensagemDeErro);

8. Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
------------------------------------
    const yourName = prompt('Qual seu nome?');

9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
------------------------------------
    const yourAge = prompt('Qual é sua idade?');

10. Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
------------------------------------
        const yourAge = prompt('Qual é sua idade?');
    if (yourAge >= 18) {
        alert('Você ja pode ter sua HABILITAÇÃO');
    } else {
        alert('Você ainda não pode tirar a HABILITAÇÃO');
    }
*/


/*
    DESAFIOS PROPOSTO

1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
------------------------------------
    const dayToday = prompt('Qual é o dia da semana?');

    if (dayToday == 'Sabado' || dayToday == 'Domingo') {
        alert('Bom dim fim de semana!')
    } else {
        alert('Boa semana!');
    }

2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
------------------------------------
    const numberTyped = prompt('Digite um número negativo ou positivo')

    if (numberTyped < 0) {
        alert('Número negativo');
    } else {
        alert('Numero positvo');
    }

3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
------------------------------------
    const numberGame = prompt('Qual foi a sua pontuação?');

    if (numberGame >= 100) {
        alert('Parabéns, você venceu!');
    } else {
        alert('Tente novamente para ganhar.');
    }

4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
------------------------------------
    const saldoConta = prompt('Digite o saldo da sua conta:');
    alert(`O saldo da sua conta é de ${saldoConta}`);

5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
------------------------------------
    const myName = prompt('Digite seu nome:');
    alert(`Bem vindo ${myName}`);
*/






