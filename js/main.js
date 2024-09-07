document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu-4').classList.toggle('active');
  });
  

document.addEventListener('DOMContentLoaded', function() {
  const angleDownButton = document.querySelector('.angle-down');

  if (angleDownButton) {
      angleDownButton.addEventListener('click', function() {
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

          window.scrollTo({
              top: viewportHeight,
              behavior: 'smooth'
          });
      });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});
