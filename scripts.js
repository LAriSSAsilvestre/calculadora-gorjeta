let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta (evento) {
    conta = Number(evento.target.value)
}

const peassoasInput = document.querySelector("#pessoas")
peassoasInput.addEventListener("input", receberQuantidadedePessoas)

function receberQuantidadedePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divERRo = document.querySelector(".pessoas .input-box")
    
    if(evento.target.value === "0") {       
        paragrafoErro.style.display = "block"
        divERRo.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divERRo.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type'button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagemBotao)
})

function receberPorcentagemBotao(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })


    porcentagem = perseFloat(evento.target.value) / 100

}