function ranking() {
  // Busca o ranking salvo no localStorage
  const ranking = JSON.parse(localStorage.getItem('rankingLetreco')) || [];

  // Se não houver nada salvo ainda
  if (ranking.length === 0) {
    Swal.fire({
      title: '🏆 Ranking',
      text: 'Nenhum tempo registrado ainda. Seja o primeiro a jogar!',
      icon: 'info',
      confirmButtonText: 'Fechar'
    });
    return;
  }

  // Constrói as linhas da tabela
  let linhasTabela = '';

  ranking.forEach((item, index) => {
    let posicao = index + 1;
    if (posicao === 1) posicao = '🥇';
    else if (posicao === 2) posicao = '🥈';
    else if (posicao === 3) posicao = '🥉';
});
Swal.fire({
    title: '🏆 Melhores Tempos',
    html: `${linhasTabela}`,
    icon: 'success',
    confirmButtonText: 'Fechar'
  });
}