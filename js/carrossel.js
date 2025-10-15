document.addEventListener('DOMContentLoaded', function(){
document.querySelectorAll('.carrossel').forEach(carrossel => {
const imgs = carrossel.querySelectorAll('.carrossel-img');
let idx = 0;
function mostrarImg(i) {
imgs.forEach((img, ind) => img.classList.toggle('ativo', ind === i));
}
function avancar() {
idx = (idx + 1) % imgs.length;
mostrarImg(idx);
}
mostrarImg(idx);
setInterval(avancar, 3000);
});
});