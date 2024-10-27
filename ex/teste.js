// Definindo a variável de minutos
let minutos = 150;

// Calculando as horas e minutos
let horas = Math.floor(minutos / 60); // Obtém a parte inteira da divisão
let minutos_restantes = minutos % 60; // Obtém o resto da divisão

// Exibindo o resultado
console.log("Tempo total:", horas, "horas e", minutos_restantes, "minutos");