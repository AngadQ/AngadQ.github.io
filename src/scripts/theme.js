const themeButton = document.querySelector('.theme-toggle');

function currentTheme() {
  const selectedTheme = document.documentElement.dataset.theme;
  if (selectedTheme === 'light' || selectedTheme === 'dark') {
    return selectedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateButton() {
  if (!themeButton) return;
  themeButton.setAttribute(
    'aria-label',
    currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
  );
}

themeButton?.addEventListener('click', () => {
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;

  try {
    localStorage.setItem('theme', nextTheme);
  } catch (error) {
    // The switch still works for this page if storage is unavailable.
  }

  updateButton();
});

updateButton();
