function toggleConteudo(buttonValue) {
  const containers = document.getElementsByClassName('container');
  const conteudo = document.getElementById('conteudo' + buttonValue);
  const desc = document.getElementById('descricao'+ buttonValue);
  const descricao = document.getElementsByClassName('descricao');

  if (conteudo) {
    if (conteudo.style.display === 'flex') {
      // Se o conteúdo já está visível, esconde-o
      conteudo.style.display = 'none';
      desc.style.display = 'none';
    } else {
      // Se o conteúdo não está visível, esconde todos os outros e mostra este
      for (let i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none';
        
        
      }
      for (let i = 0; i < descricao.length; i++) {
      descricao[i].style.display = 'none';
        
      }
      conteudo.style.display = 'flex';
      desc.style.display = 'flex';
    }
  }
}