(() => {
  const catalog = document.querySelector('[data-menu-catalog]');

  if (!catalog) return;

  const filters = [...catalog.querySelectorAll('[data-filter]')];
  const search = catalog.querySelector('[data-menu-search]');
  const cards = [...catalog.querySelectorAll('.menu-card')];
  const count = catalog.querySelector('[data-menu-count]');
  const emptyState = catalog.querySelector('[data-menu-empty]');
  let activeCategory = 'todos';

  const normalize = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
    .trim();

  const render = () => {
    const query = normalize(search.value);
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesCategory = activeCategory === 'todos' || card.dataset.category === activeCategory;
      const matchesSearch = normalize(card.dataset.search).includes(query);
      card.hidden = !(matchesCategory && matchesSearch);
      if (!card.hidden) visibleCount += 1;
    });

    count.textContent = `${visibleCount} ${visibleCount === 1 ? 'opción' : 'opciones'}`;
    emptyState.hidden = visibleCount > 0;
  };

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      activeCategory = filter.dataset.filter;
      filters.forEach((button) => {
        button.setAttribute('aria-pressed', String(button === filter));
      });
      render();
    });
  });

  search.addEventListener('input', render);
})();
