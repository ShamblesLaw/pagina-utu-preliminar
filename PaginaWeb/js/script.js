document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
                 {img: './img/galeria/1.jpeg'},
                 {img: './img/galeria/2.jpg'},
                 {img: './img/galeria/3.jpg'},
                 {img: './img/galeria/4.jpg'},
                 {img: './img/galeria/5.jpg'},
                 {img: './img/galeria/6.jpg'},
                 {img: './img/galeria/7.jpg'},
                 {img: './img/galeria/8.jpg'},
                 {img: './img/galeria/9.jpg'},
                 {img: './img/galeria/10.jpg'},
                 {img: './img/galeria/11.jpg'},
                 {img: './img/galeria/12.jpg'},
                 {img: './img/galeria/13.jpg'},
                 {img: './img/galeria/14.jpg'},
                 {img: './img/galeria/15.jpg'},
                 {img: './img/galeria/16.jpg'},
                 {img: './img/galeria/17.jpg'},
                 {img: './img/galeria/18.jpg'},
                 {img: './img/galeria/19.jpg'},
                 {img: './img/galeria/20.jpg'},
                 {img: './img/galeria/21.jpg'},
                 {img: './img/galeria/22.jpg'},
                 {img: './img/galeria/23.jpg'},
                 {img: './img/galeria/24.jpg'},
                 {img: './img/galeria/25.jpg'}
             ];
        

    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshows = document.querySelector('.slideshow img');


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +(event.target.dataset.imgMostrar)
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("btn_cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden";
    }
});

