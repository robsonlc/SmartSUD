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
    document.getElementById('content').innerHTML = html;
  })
  .catch(error => {
    document.getElementById('content').innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
    console.error(error);
  });
