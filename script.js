let mensagem = document.querySelector('div#msg')
let botão = document.querySelector('input#botão')

botão.addEventListener("mouseover",e =>{
    botão.style.background="yellow"
    botão.style.color="red"}
)
botão.addEventListener("mouseout",e =>{
    botão.style.background=""
    botão.style.color=''}
)

function clicar(){
    let agora = new Date()
    let hora = agora.getHours()
    let diaSem = agora.getDay()
    if (hora < 5 ){
        hora = "Boa madrugada!"
    } else if (hora <= 12) {
        hora = "Bom Dia!"
    } else if (hora <= 18){
        hora = "Boa tarde!"
    } else if ( hora <= 23){
        hora = "Boa noite!"
    }
    switch(diaSem) {
        case 0:
            diaSem ="um ótimo domingo"
            break
        case 1:
            diaSem ="uma excelente segunda-feira"
            break
        case 2:
            diaSem ="uma excelente terça-feira"
            break
        case 3:
            diaSem ="uma excelente quarta-feira"
            break
        case 4:
            diaSem ="uma excelente quinta-feira"
            break
        case 5:
            diaSem ="uma excelente sexta-feira"
            break
        case 6:
            diaSem ="um ótimo sábado"
            break
    }
    mensagem.innerHTML = `${hora} Não esqueça de se hidratar, beba água \u{1F604} e tenha ${diaSem}!`

}

let link= document.querySelector('a#link')
link.addEventListener("mouseover",e =>{
    link.style.background="blue"
    link.style.color="white"}
)
link.addEventListener("mouseout",e =>{
    link.style.background=""
    link.style.color=''}
)