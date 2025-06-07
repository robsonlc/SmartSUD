// Lista de arquivos Markdown a serem carregados em ordem
const modules = [
  'docs/00-intro.md',
  'docs/01-visao-geral.md',
  'docs/02-fases-evolucao.md',
  'docs/03-blocos-modulares.md',
  'docs/04-modo-operacao.md',
  'docs/05-modelos-receita.md',
  'docs/06-posicionamento-mercado.md',
  'docs/07-criterio-estrategico.md',
  'docs/08-roadmap.md',
  'docs/09-filosofia.md',
  'docs/10-apendice.md',
  'docs/11-glossario.md'
];

Promise.all(modules.map(file => fetch(file).then(res => res.text())))
  .then(texts => {
    const html = texts.map(t => marked.parse(t)).join('\n');
    const content = document.getElementById('content');
    content.innerHTML = html;

    // Apply custom IDs defined in headings using the {#id} syntax
    content.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
      const match = heading.innerHTML.match(/\s*\{#([^}]+)\}\s*$/);
      if (match) {
        heading.innerHTML = heading.innerHTML.replace(/\s*\{#[^}]+\}\s*$/, '').trim();
        heading.id = match[1];
      }
    });
  })
  .catch(error => {
    document.getElementById('content').innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
    console.error(error);
  });
