// js/contraste.js
document.addEventListener('DOMContentLoaded', function () {
  const botaoContraste = document.getElementById('toggle-contraste');
  if (botaoContraste) {
    botaoContraste.addEventListener('click', function () {
      document.body.classList.toggle('alto-contraste');
      // Mudança visual acessível para leitores de tela
      const isActive = document.body.classList.contains('alto-contraste');
      botaoContraste.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      botaoContraste.innerText = isActive ? 'Modo normal' : 'Alto Contraste';
    });
  }
});