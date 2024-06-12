const observer = new MutationObserver(function() {
  const currentUrl = window.location.pathname.split('/').pop();
  const currentLink = document.querySelector(`.service-buttons li a[href="${currentUrl}"]`);
  if (currentLink) {
    links.forEach(link => link.parentElement.classList.remove('select'));
    currentLink.parentElement.classList.add('select');
  }
});

const observerConfig = {
  childList: true,
  subtree: true
};

const targetNode = document.querySelector('.service-buttons');
observer.observe(targetNode, observerConfig);

const links = document.querySelectorAll('.service-buttons li a');
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(link => link.parentElement.classList.remove('select'));
    this.parentElement.classList.add('select');
    console.log('SELECT added');
    window.location.href = this.getAttribute('href');
  });
});
