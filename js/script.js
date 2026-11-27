const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.setAttribute('aria-pressed', String(active));
      item.classList.toggle('bg-ink', active);
      item.classList.toggle('text-white', active);
      item.classList.toggle('border', !active);
      item.classList.toggle('border-ink/15', !active);
      item.classList.toggle('text-ink', !active);
    });

    projects.forEach((project) => {
      project.hidden = filter !== 'todos' && project.dataset.category !== filter;
    });
  });
});

const catalog = document.querySelector('#project-catalog');
if (catalog) {
  const cards = [...catalog.querySelectorAll('[data-project-card]')];
  const search = document.querySelector('#project-search');
  const letterButtons = document.querySelectorAll('[data-letter]');
  const count = document.querySelector('#result-count');
  const emptyState = document.querySelector('#empty-state');
  let selectedLetter = 'todos';

  const updateCatalog = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const name = card.dataset.projectName || '';
      const matchesQuery = !query || name.includes(query);
      const matchesLetter = selectedLetter === 'todos' || name.startsWith(selectedLetter);
      const isVisible = matchesQuery && matchesLetter;
      card.hidden = !isVisible;
      if (isVisible) visible += 1;
    });
    if (count) count.innerHTML = `${String(visible).padStart(2, '0')} <span class="font-sans text-sm font-normal text-muted">trabajos</span>`;
    if (emptyState) emptyState.hidden = visible !== 0;
  };

  search?.addEventListener('input', updateCatalog);
  letterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedLetter = button.dataset.letter;
      letterButtons.forEach((item) => {
        const active = item === button;
        item.setAttribute('aria-pressed', String(active));
        item.classList.toggle('bg-ink', active);
        item.classList.toggle('text-white', active);
        item.classList.toggle('border', !active);
        item.classList.toggle('border-ink/15', !active);
      });
      updateCatalog();
    });
  });
}
