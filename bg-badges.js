document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector('.bg-badges');
  const images = section.querySelectorAll('.badge-img');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        images.forEach(img => img.classList.add('animate'));
        observer.disconnect(); // anima só uma vez
      }
    });
  }, { threshold: 0.4 });

  observer.observe(section);
});