const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    // Usar o método querySelector diretamente para acessar os valores dos inputs
    const titulo = document.querySelector("#inTitulo").value; 
    const duracao = Number(document.querySelector("#inDuracao").value);

    const horas = Math.floor(duracao / 60); // arredonda para baixo o resultado
    const minutos = duracao % 60; // obtém o resto da divisão

    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
    e.preventDefault(); // evita envio do form
});
