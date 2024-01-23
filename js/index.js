function mostrarDetalles(imgUrl) {
    var retrocesoElement = document.querySelector('.retroceso');
    var mas_detallesElement = document.querySelector('.section_individual_movil');
    var ocultar_catalogoElement = document.querySelector('.section_catalogo_movil');
    var img_selectElement = document.querySelector('.articulo_individual_img_movil');

    mas_detallesElement.style.opacity = '1';
    retrocesoElement.style.opacity = '1';
    ocultar_catalogoElement.style.opacity = '0';

    setTimeout(function() {
        mas_detallesElement.style.display = 'flex';
        retrocesoElement.style.display = 'flex';
        ocultar_catalogoElement.style.display = 'none';
        img_selectElement.style.backgroundImage = 'url("' + imgUrl + '")';
    }, 150);
}

function botonVolver() {
    var retrocesoElement = document.querySelector('.retroceso');
    var mas_detallesElement = document.querySelector('.section_individual_movil');
    var ocultar_catalogoElement = document.querySelector('.section_catalogo_movil');

    retrocesoElement.style.opacity = '0';
    mas_detallesElement.style.opacity = '0';
    ocultar_catalogoElement.style.opacity = '1';

    // Añade un tiempo de espera antes de cambiar la propiedad display
    setTimeout(function () {
        retrocesoElement.style.display = 'none';
        mas_detallesElement.style.display = 'none';
        ocultar_catalogoElement.style.display = 'flex';
    }, 150); // 500 ms, coincide con la duración de la transición
}

function mostrarDog36() {
    mostrarDetalles('images/dogs/dog_36.jpg');
}
function mostrarDog35() {
    mostrarDetalles('images/dogs/dog_35.jpg');
}
function mostrarDog34() {
    mostrarDetalles('images/dogs/dog_34.jpg');
}
function mostrarDog33() {
    mostrarDetalles('images/dogs/dog_33.jpg');
}
function mostrarDog32() {
    mostrarDetalles('images/dogs/dog_32.jpg');
}
function mostrarDog31() {
    mostrarDetalles('images/dogs/dog_31.jpg');
}
function mostrarDog30() {
    mostrarDetalles('images/dogs/dog_30.jpg');
}
function mostrarDog29() {
    mostrarDetalles('images/dogs/dog_29.jpg');
}
function mostrarDog28() {
    mostrarDetalles('images/dogs/dog_28.jpg');
}
function mostrarDog27() {
    mostrarDetalles('images/dogs/dog_27.jpg');
}
function mostrarDog26() {
    mostrarDetalles('images/dogs/dog_26.jpg');
}
function mostrarDog25() {
    mostrarDetalles('images/dogs/dog_25.jpg');
}
function mostrarDog24() {
    mostrarDetalles('images/dogs/dog_24.jpg');
}
function mostrarDog23() {
    mostrarDetalles('images/dogs/dog_23.jpg');
}
function mostrarDog22() {
    mostrarDetalles('images/dogs/dog_22.jpg');
}
function mostrarDog21() {
    mostrarDetalles('images/dogs/dog_21.jpg');
}
function mostrarDog20() {
    mostrarDetalles('images/dogs/dog_20.jpg');
}
function mostrarDog19() {
    mostrarDetalles('images/dogs/dog_19.jpg');
}
function mostrarDog18() {
    mostrarDetalles('images/dogs/dog_18.jpg');
}
function mostrarDog17() {
    mostrarDetalles('images/dogs/dog_17.jpg');
}
function mostrarDog16() {
    mostrarDetalles('images/dogs/dog_16.jpg');
}
function mostrarDog15() {
    mostrarDetalles('images/dogs/dog_15.jpg');
}
function mostrarDog14() {
    mostrarDetalles('images/dogs/dog_14.jpg');
}
function mostrarDog13() {
    mostrarDetalles('images/dogs/dog_13.jpg');
}
function mostrarDog12() {
    mostrarDetalles('images/dogs/dog_12.jpg');
}
function mostrarDog11() {
    mostrarDetalles('images/dogs/dog_11.jpg');
}
function mostrarDog10() {
    mostrarDetalles('images/dogs/dog_10.jpg');
}
function mostrarDog09() {
    mostrarDetalles('images/dogs/dog_09.jpg');
}
function mostrarDog08() {
    mostrarDetalles('images/dogs/dog_08.jpg');
}
function mostrarDog07() {
    mostrarDetalles('images/dogs/dog_07.jpg');
}
function mostrarDog06() {
    mostrarDetalles('images/dogs/dog_06.jpg');
}
function mostrarDog05() {
    mostrarDetalles('images/dogs/dog_05.jpg');
}
function mostrarDog04() {
    mostrarDetalles('images/dogs/dog_04.jpg');
}
function mostrarDog03() {
    mostrarDetalles('images/dogs/dog_03.jpg');
}
function mostrarDog02() {
    mostrarDetalles('images/dogs/dog_02.jpg');
}
function mostrarDog01() {
    mostrarDetalles('images/dogs/dog_01.jpg');
}






/*****************************Contactos ***********************************/
/**************************************************************************/
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