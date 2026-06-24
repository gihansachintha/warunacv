const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
