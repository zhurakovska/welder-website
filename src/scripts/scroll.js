function scrollToSection(elementId) {
  const element = document.getElementById(elementId);
  const offsetTop = element.getBoundingClientRect().top;
  const scrollOptions = {
    behavior: 'smooth',
    block: 'start',
  };
  window.scrollBy({ top: offsetTop, left: 0, behavior: 'smooth' });
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = link.getAttribute('href').slice(1);
    scrollToSection(target);
  });
});
