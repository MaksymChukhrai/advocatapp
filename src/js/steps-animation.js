document.addEventListener('DOMContentLoaded', function() {
    const stepsContainers = document.querySelectorAll('.steps-container');
  
    function checkVisibility() {
      stepsContainers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
        
        if (isVisible) {
          container.style.opacity = 1;
          container.style.transform = 'translateX(0)';
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Проверяем видимость при загрузке страницы
  });
  