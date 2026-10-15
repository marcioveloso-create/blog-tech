// 1. Contador de curtidas nos cards
const botoesCurtir = document.querySelectorAll('.btn-curtir');

botoesCurtir.forEach((botao) => {
    let contador = 0;
    botao.addEventListener('click', () => {
        contador++;
        const spanContador = botao.querySelector('span');
        spanContador.textContent = contador;
    });
});

// 2. Botão para alternar tema (Claro / Escuro)
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});