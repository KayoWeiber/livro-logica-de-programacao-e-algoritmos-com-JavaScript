const form=document.getElementById("form")
const resp=document.getElementById("h3")

form.addEventListener("submit",(e)=>{
    const product=form.produto.value
    const valor=Number(form.valor.value)

    resp.innerHTML=`<p>${product} - Promoção: Leve 3 por R$${Math.round((valor*2)+(valor/2)).toFixed(2)}</p>`
    resp.innerHTML+=`<p>O 3º produto custa apenas R$${(valor/2).toFixed(2)}</p>`
    e.preventDefault()
})