alert('Boas vindas ao jogo do número secreto');

let numberTyped;
let numberSecret = 3;
let  attempts = 1;

while (numberTyped != numberSecret) {
    numberTyped = prompt('Digite um número de 1 a 10: ')
    if (numberTyped == numberSecret) {
        alert(`Você acertou! o número secreto ${numberSecret}. Com ${attempts} tentativas!`);
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







/*
    DESAFIOS PROPOSTO

1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
    alert('"Boas vindas ao nosso site!"')

2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
    const name = 'lua'

3. Crie uma variável chamada idade e atribua a ela o valor 25.
    const idade = 25

4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
    const numeroDeVendas = 50

5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
    const saldoDisponivel = 1000

6. Exiba um alerta com o texto "Erro! Preencha todos os campos"  
    alert("Erro! Preencha todos os campos");

7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
    const mensagemDeErro = "Erro! Preencha todos os campos"
    alert(mensagemDeErro);

8. Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
    const yourName = prompt('Qual seu nome?');

9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
    const yourAge = prompt('Qual é sua idade?');

10. Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
        const yourAge = prompt('Qual é sua idade?');
    if (yourAge >= 18) {
        alert('Você ja pode ter sua HABILITAÇÃO');
    } else {
        alert('Você ainda não pode tirar a HABILITAÇÃO');
    }

*/


/*

1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
    const dayToday = prompt('Qual é o dia da semana?');

    if (dayToday == 'Sabado' || dayToday == 'Domingo') {
        alert('Bom dim fim de semana!')
    } else {
        alert('Boa semana!');
    }

2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
    const numberTyped = prompt('Digite um número negativo ou positivo')

    if (numberTyped < 0) {
        alert('Número negativo');
    } else {
        alert('Numero positvo');
    }

3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
    const numberGame = prompt('Qual foi a sua pontuação?');

    if (numberGame >= 100) {
        alert('Parabéns, você venceu!');
    } else {
        alert('Tente novamente para ganhar.');
    }

4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
    const saldoConta = prompt('Digite o saldo da sua conta:');

    alert(`O saldo da sua conta é de ${saldoConta}`);

5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
    const myName = prompt('Digite seu nome:');

    alert(`Bem vindo ${myName}`);

*/






