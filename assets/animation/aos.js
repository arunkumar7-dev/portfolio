
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll("[data-aos]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
      }
      else {
        entry.target.classList.remove("aos-animate");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
