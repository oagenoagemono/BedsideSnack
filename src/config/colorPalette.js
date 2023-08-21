function setTheme(num) {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', `var(--pc-${num})`);
  root.style.setProperty('--background-color', `var(--bc-${num})`);
  root.style.setProperty('--highlight-color', `var(--hc-${num})`);
  root.style.setProperty('--font-color', `var(--fc-${num})`);
}