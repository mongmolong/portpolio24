document.addEventListener('DOMContentLoaded', function () {
  const aboutBoxes = document.querySelectorAll('.box_active');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible'); 
          }
      });
  }, options);

  aboutBoxes.forEach(box => {
      observer.observe(box); 
  });
});
