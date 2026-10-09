const input = document.getElementById('id_usuario');
  const botao = document.getElementById('meuBotao');

  input.addEventListener('input', () => {
    
    if (input.value.length >= 3) {
      botao.disabled = false; 
    } else {
      botao.disabled = true;  
    }
  });
  botao.addEventListener('click', (event) => {
  

  const usuario = input.value.trim();

  localStorage.setItem('usuarioLogado', usuario);

  //Redireciona para a página principal 
  window.location.href = 'jogo.html';
});