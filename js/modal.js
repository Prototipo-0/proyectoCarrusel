const inicio = document.getElementById("inicio");
const modalContainer = document.getElementById("modalContainer");
const ingresar = document.getElementById("ingresar");

inicio.addEventListener('click', () => {
    modalContainer.classList.add('show');
});
ingresar.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

function modificar (){
    document.getElementById('demo').innerHTML = document.getElementById('usuario').value;
}