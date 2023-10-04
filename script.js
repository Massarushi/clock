

const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

function SemTempoIrmao(){
       const tempo = new Date ();

       const horaRotacao = (360 / 12) * tempo.getHours();
       const minutoRotacao = (360/ 60) * tempo.getMinutes();
       const segundoRotacao =(360 / 60 ) *  tempo.getSeconds();
      
      horas.style.transform = `rotate(${horaRotacacao}deg)`
      minutos.style.transform = `rotate(${minutoRotacacao}deg)`
      segundos.style.transform = `rotate(${segundoRotacacao}deg)`

}

SemTempoIrmao()

setInterval(SemTempoIrmao, 1000)