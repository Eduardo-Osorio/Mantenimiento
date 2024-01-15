function mostrarContenido() {
    var mostrarElement = document.querySelector('.instagram1_mostrar');
    var contenidoElement = document.querySelector('.instagram1_contenido');
    var ocultarElement = document.querySelector('.instagram1_ocultar');

    mostrarElement.style.display = 'none';
    contenidoElement.style.display = 'flex';
    ocultarElement.style.display = 'flex';
}

function ocultarContenido() {
    var mostrarElement = document.querySelector('.instagram1_mostrar');
    var ocultarElement = document.querySelector('.instagram1_ocultar');
    var contenidoElement = document.querySelector('.instagram1_contenido');

    mostrarElement.style.display = 'block';
    ocultarElement.style.display = 'none';
    contenidoElement.style.display = 'none';
}