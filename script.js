function mostrarInfo(id) {
  const infoBox = document.getElementById('info-box');
  let conteudo = '';

  switch(id) {
    case 'gusttavo':
      conteudo = '<h3>Gusttavo Lima</h3><p>Conhecido como "Embaixador", é um dos maiores nomes do sertanejo atual.</p>';
      break;
    case 'maiara':
      conteudo = '<h3>Maiara & Maraisa</h3><p>Duas irmãs com vozes marcantes e hits apaixonantes.</p>';
      break;
    case 'jorge':
      conteudo = '<h3>Jorge & Mateus</h3><p>Dupla consagrada com músicas românticas e animadas.</p>';
      break;
    case 'zeze':
      conteudo = '<h3>Zezé Di Camargo & Luciano</h3><p>Lendas do sertanejo, conhecidos por músicas que marcaram gerações.</p>';
      break;
    case 'luan':
      conteudo = '<h3>Luan Santana</h3><p>Um dos maiores artistas da nova geração do sertanejo.</p>';
      break;
    case 'leilao':
      conteudo = '<h3>Leilão de Gado</h3><p>Tradição rural que movimenta a economia e reúne produtores.</p>';
      break;
    case 'quadrilha':
      conteudo = '<h3>Quadrilha Caipira</h3><p>Uma das atrações mais esperadas das festas juninas, cheia de alegria e cultura.</p>';
      break;
  }

  infoBox.innerHTML = conteudo;
  infoBox.classList.remove('hidden');
}