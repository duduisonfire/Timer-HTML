function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 1;
let timer;

iniciar.addEventListener('click', function(){
  clearTimeout(timer);
  timer = setInterval(function(){
    relogio.innerHTML = criaHoraDosSegundos(segundos);
    console.log(segundos);
    segundos++;
  }, 1000);
})

pausar.addEventListener('click', function(){
  clearTimeout(timer);
})

zerar.addEventListener('click', function(){
  relogio.innerHTML = '00:00:00';
  segundos = 1;
})
