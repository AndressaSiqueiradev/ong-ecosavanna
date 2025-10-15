document.addEventListener('DOMContentLoaded', function () {
const cpfInput = document.getElementById('cpf');
if (cpfInput) {
cpfInput.addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, '').slice(0, 11);
value = value.replace(/(\d{3})(\d)/, '$1.$2');
value = value.replace(/(\d{3})(\d)/, '$1.$2');
value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
e.target.value = value;
});
}
//Telefone
const telInput = document.getElementById('telefone');
if (telInput) {
telInput.addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, '').slice(0, 11);
value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
value = value.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
e.target.value = value;
});
}
//CEP
const cepInput = document.getElementById('cep');
if (cepInput) {
cepInput.addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, '').slice(0, 8);
value = value.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
e.target.value = value;
});
}
});