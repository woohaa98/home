// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Add slight delay for staggered effect
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 50);

        // Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });
});
