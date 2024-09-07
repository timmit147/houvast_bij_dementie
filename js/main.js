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