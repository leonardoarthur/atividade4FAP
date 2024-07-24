// VisualStudioCode - 1
let numero: number = prompt("Digite um número inteiro:"); // Erro: prompt retorna uma string, deveria ser parseInt(prompt(...))
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é igual a zero.");
}

// SublimeText - 2
let idade: number = prompt("Digite sua idade:"); // Erro: prompt retorna uma string, deveria ser parseInt(prompt(...))
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Atom - 3
let num1: number = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2: number = parseInt(prompt("Digite o segundo número inteiro:"));
if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}.`);
} else if (num2 > num1) {
    console.log(`${num2} é maior que ${num1}.`);
} else {
    console.log("Os números são iguais.");
}

// Eclipse - 4
let numeroParImpar: number = parseInt(prompt("Digite um número inteiro:"));
if (numeroParImpar % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// IntelliJ - 5
let nota1: number = parseFloat(prompt("Digite a primeira nota:"));
let nota2: number = parseFloat(prompt("Digite a segunda nota:"));
let nota3: number = parseFloat(prompt("Digite a terceira nota:"));
let media: number = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado.");
}

// NetBeans - 6
let nome1: string = prompt("Digite o nome da primeira pessoa:");
let nome2: string = prompt("Digite o nome da segunda pessoa:");
if (nome1.length > nome2.length) {
    console.log(`${nome1} possui mais caracteres.`);
} else if (nome2.length > nome1.length) {
    console.log(`${nome2} possui mais caracteres.`);
} else {
    console.log("Os nomes têm o mesmo número de caracteres.");
}

// PyCharm - 7
let caractere: string = prompt("Digite um caractere:");
if (
    caractere === "a" ||
    caractere === "e" ||
    caractere === "i" ||
    caractere === "o" ||
    caractere === "u"
) {
    console.log("É uma vogal.");
} else {
    console.log("É uma consoante.");
}

// Xcode - 8
let numero1: number = parseInt(prompt("Digite o primeiro número:"));
let numero2: number = parseInt(prompt("Digite o segundo número:"));
let numero3: number = parseInt(prompt("Digite o terceiro número:"));
if (numero1 <= numero2 && numero1 <= numero3) {
    console.log(`${numero1}, ${numero2}, ${numero3}`);
} else if (numero2 <= numero1 && numero2 <= numero3) {
    console.log(`${numero2}, ${numero1}, ${numero3}`);
} else {
    console.log(`${numero3}, ${numero1}, ${numero2}`);
}

// CodeBlocks - 9
let peso: number = parseFloat(prompt("Digite seu peso em kg:"));
let altura: number = parseFloat(prompt("Digite sua altura em metros:"));
let imc: number = peso / (altura * altura);
if (imc < 18.5) {
    console.log("Abaixo do peso.");
} else if (imc < 24.9) {
    console.log("Peso normal.");
} else if (imc < 29.9) {
    console.log("Sobrepeso.");
} else if (imc < 39.9) {
    console.log("Obeso.");
} else {
    console.log("Muito obeso.");
}

// VisualStudio - 10
let mes: number = parseInt(prompt("Digite o número do mês (1 a 12):"));
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido.");
}

// CodeLite - 11
let salario: number = parseFloat(prompt("Digite o salário do funcionário:"));
let aumento: number;
if (salario > 1500) {
    aumento = salario * 0.1;
} else {
    aumento = salario * 0.15;
}
let novoSalario: number = salario + aumento;
console.log(`O novo salário é: ${novoSalario}`);

// WebStorm - 12
let numeroDivisivel: number = parseInt(prompt("Digite um número inteiro:"));
if (numeroDivisivel % 3 === 0 && numeroDivisivel % 5 === 0) {
    console.log("O número é divisível por 3 e por 5.");
} else {
    console.log("O número não é divisível por 3 e por 5 simultaneamente.");
}

// Rider - 13
let diaSemana: string = prompt("Digite o dia da semana (por extenso):");
if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log("É fim de semana.");
} else {
    console.log("É dia útil.");
}

// VisualStudioCommunity - 14
let notaAluno: number = parseInt(prompt("Digite a nota (1 a 5):"));
switch (notaAluno) {
    case 5:
    case 4:
        console.log("Muito bom");
        break;
    case 3:
        console.log("Bom");
        break;
    case 2:
        console.log("Regular");
        break;
    case 1:
        console.log("Insuficiente");
        break;
    default:
        console.log("Muito insuficiente");
}
