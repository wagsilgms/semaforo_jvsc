let cor = ['red', 'yellow', 'green'];
let corIndex = 0;
let auto = '';

document.querySelectorAll('.button.cor').forEach(item => {
      item.addEventListener('click', changeColor);
});
document.querySelector('#auto').addEventListener('click', automatic);
document.querySelector('.off').addEventListener('click', stop);

function changeColor(event) {
      let color = event.target.getAttribute('data-color');

      if (color !== null) {
            clearInterval(auto);
            document.querySelector('#semaforo img').src = `./img/${color}.png`;
      } else {
            clearInterval(auto);
            automatic();
      }
}

function automatic() {
      if (!auto) {
      	auto = setInterval(() => {
                  document.querySelector('#semaforo img').src = `./img/${cor[corIndex]}.png`;
                  (corIndex < 2) ? corIndex++ : corIndex = 0;
            }, 1000);
      }
}

function stop() {
      window.location.href = window.location.href;
}