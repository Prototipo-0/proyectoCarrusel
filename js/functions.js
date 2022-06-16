let slideImagenes = 1;
showSlides(slideImagenes);

// Next/previous controls
function movImagen(n) {
  showSlides(slideImagenes += n);
}

// Thumbnail image controls
function orientar(n) {
  showSlides(slideImagenes = n);
}

function showSlides(n) {
  let i;
  let imgCambio = document.getElementsByClassName("imagenesTransi");
  let botonInferior = document.getElementsByClassName("boton");
  if (n > imgCambio.length) {
      slideImagenes = 1
    }
  if (n < 1) {
      slideImagenes = imgCambio.length
    }
  for (i = 0; i < imgCambio.length; i++) {
    imgCambio[i].style.display = "none";
  }
  for (i = 0; i < botonInferior.length; i++) {
    botonInferior[i].className = botonInferior[i].className.replace(" active", "");
  }
  imgCambio[slideImagenes-1].style.display = "block";
  botonInferior[slideImagenes-1].className += " active";
}
