const  frm=document.querySelector("form")
const resp=document.querySelector('h3')

frm.addEventListener('submit',(e) =>{ // ao apertar o submit acontecerá o evento abaixo
const quilo=Number(frm.inQuilo.value)
const consumo=Number(frm.inConsumo.value)

const valor= (quilo/1000)*consumo
resp.innerText=`O valor a pagar é R$: ${valor.toFixed(2)}`

e.preventDefault()
}

)