const buttons = document.querySelectorAll(".button")
const buttonsExecute = document.querySelectorAll(".button-execute")
const buttonsAcessorio = document.querySelectorAll(".button-acessorio")
const digitados = document.querySelector("#digitados")

function aparecer(e) {
    const pressionado = e.srcElement.innerText

    digitados.textContent += pressionado
}

function operation() {
    const numerosAnteriores = digitados.textContent
    const conta = eval(numerosAnteriores)
    digitados.textContent = ""
    digitados.textContent = conta

}

function apagar(e) {
    const pressionado = e.srcElement.innerText
    if(pressionado === "AC"){
        digitados.textContent = ""
        return
    }
    if(pressionado === "C"){
        const escrito = digitados.textContent

        const apagar = escrito.slice(0, -1)
        digitados.textContent = apagar
    }
}


buttons.forEach((e) => {
    e.addEventListener("click", aparecer)
})

buttonsExecute.forEach((e) => {
    e.addEventListener("click", operation)
})

buttonsAcessorio.forEach((e) => {
    e.addEventListener("click", apagar)
})