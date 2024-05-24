const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
// Ex01
const start = document.getElementById('start-pause')
const timer = document.getElementById('timer')
const img = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const buttonPause = document.querySelector('.app__card-primary-button')
const timerFoco = 1500
const timerDescando = 300
const timerDescandoLongo = 900


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    img.setAttribute('src', 'imagens/foco.png')
    img.src
    
})


curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    img.setAttribute('src', 'imagens/descanso-curto.png')

})


longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    img.setAttribute('src', 'imagens/descanso-longo.png')
})



