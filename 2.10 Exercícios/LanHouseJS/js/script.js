const form=document.getElementById("form")
const resp=document.getElementById("h3")

form.addEventListener("submit",(e)=>{
    const valor=Number(form.valorMin.value)
    const tempo=Number(form.tempo.value)

    let tempoPagar=Math.round(tempo/15)
    
    resp.innerHTML=`O Valor a pagar R$ ${(tempoPagar*valor.toFixed(2)).toFixed(2)}`

    e.preventDefault()




})