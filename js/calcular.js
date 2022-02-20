function calcular(event){
    const $form = document.querySelector('#calculo');
    const precio = $form.precio.value;
    
    document.querySelector("h2").textContent = impuesto(precio);

    event.preventDefault();
}

function impuesto(precio){
    return (precio * 0.65) + parseInt(precio);
}

const $form = document.querySelector('#calculo');
$form.onsubmit = calcular;