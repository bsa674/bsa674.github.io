// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    // Close when a link is clicked
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
});
