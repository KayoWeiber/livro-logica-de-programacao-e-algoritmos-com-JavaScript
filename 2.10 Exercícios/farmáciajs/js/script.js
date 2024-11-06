const form=document.getElementById("form")
const resp=document.getElementById("h3")

form.addEventListener("submit",(e)=>{
    const medicamento=form.medicamento.value
    const valor=Number(form.valor.value)

    resp.innerHTML=`<p>Promoção de ${medicamento}</p>`
    resp.innerHTML+=`<p>Leve 2 por apenas ${Math.floor(valor)}</p>`
    e.preventDefault()

})

