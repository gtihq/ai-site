const targets = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

  for (const target of targets) {
    observer.observe(target);
  }
} else {
  for (const target of targets) {
    target.classList.add('is-visible');
  }
}
