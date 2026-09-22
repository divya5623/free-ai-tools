const state = { tools: [], query: '', access: '', category: '' };
const $ = (id) => document.getElementById(id);

function render() {
  const query = state.query.toLowerCase().trim();
  const filtered = state.tools.filter((tool) => {
    const haystack = [tool.name, tool.category, tool.free_limit, tool.notes].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (!state.access || tool.access === state.access) && (!state.category || tool.category === state.category);
  });
  $('count').textContent = state.tools.length;
  $('status').textContent = `${filtered.length} result${filtered.length === 1 ? '' : 's'}`;
  $('grid').innerHTML = filtered.length ? filtered.map(card).join('') : '<p>No tools match your filters. Try a broader search.</p>';
}

function card(tool) {
  const docs = tool.official_docs ? `<a href="${tool.official_docs}" target="_blank" rel="noreferrer">Docs ↗</a>` : '';
  return `<article class="card"><div class="meta"><span class="pill">${escapeHtml(tool.access)}</span><span class="pill">${escapeHtml(tool.category)}</span></div><h2>${escapeHtml(tool.name)}</h2><p><strong>Free access:</strong> ${escapeHtml(tool.free_limit || 'Check official website')}</p><p><strong>After limit:</strong> ${escapeHtml(tool.paid_after || 'Varies')}</p><p>${escapeHtml(tool.notes || '')}</p><div class="links"><a href="${tool.url}" target="_blank" rel="noreferrer">Official site ↗</a>${docs}</div></article>`;
}

function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }

async function init() {
  try {
    const response = await fetch('../data/tools.json');
    if (!response.ok) throw new Error('Could not load catalog');
    state.tools = await response.json();
    [...new Set(state.tools.map((tool) => tool.category))].sort().forEach((category) => $('category').insertAdjacentHTML('beforeend', `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`));
    render();
  } catch (error) {
    $('status').textContent = 'The catalog could not be loaded. Open the site through a web server or GitHub Pages.';
  }
}

$('search').addEventListener('input', (event) => { state.query = event.target.value; render(); });
$('access').addEventListener('change', (event) => { state.access = event.target.value; render(); });
$('category').addEventListener('change', (event) => { state.category = event.target.value; render(); });
init();
