let contador = 0;

document.querySelectorAll('.agregar').forEach(boton => {
    boton.addEventListener('click', e => {
        contador++;
        document.getElementById('contador').textContent = contador;

        let img = e.target.parentNode.parentNode.querySelector('img').cloneNode();
        img.classList.add('fly');
        document.body.appendChild(img);

        let rect = e.target.getBoundingClientRect();
        img.style.left = rect.left + 'px';
        img.style.top = rect.top + 'px';

        setTimeout(() => {
            img.remove();
        }, 1000);
    });
});

document.getElementById('finalizar').addEventListener('click', () => {
    alert(`Has agregado ${contador} producto(s) al carrito. ¡Gracias por tu compra!`);
    contador = 0;
    document.getElementById('contador').textContent = contador;
});
