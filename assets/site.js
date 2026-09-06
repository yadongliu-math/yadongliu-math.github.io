/* Content and links work without JavaScript. Enhance the narrow-screen menu. */
(() => {
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-navigation');
  if (!button || !navigation) {
    return;
  }

  document.documentElement.classList.add('js');
  button.hidden = false;

  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close' : 'Menu';
    navigation.classList.toggle('is-open', open);
  };

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setOpen(false);
    }
  });

  window.matchMedia('(min-width: 701px)').addEventListener('change', (event) => {
    if (event.matches) {
      setOpen(false);
    }
  });

})();
