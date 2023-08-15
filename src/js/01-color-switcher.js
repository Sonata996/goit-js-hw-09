function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const body = document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')

btnStart.addEventListener('click', onClickStartRandomColor)
btnStop.addEventListener('click', onClickStopRandomColor)


function onClickStartRandomColor() {
    body.style.backgroundColor = getRandomHexColor()
    document.querySelector('[data-start]').disabled = true;
    timeInterval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    
}
function onClickStopRandomColor() {
    clearInterval(timeInterval)
    document.querySelector('[data-start]').disabled = false;
}