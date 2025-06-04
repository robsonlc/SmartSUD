// Carrega o arquivo Markdown e converte para HTML
fetch('SmartSUD - Rev.2025.06.01.md')
  .then(response => response.text())
  .then(text => {
    const html = marked.parse(text);
    document.getElementById('content').innerHTML = html;
  })
  .catch(error => {
    document.getElementById('content').innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
    console.error(error);
  });
