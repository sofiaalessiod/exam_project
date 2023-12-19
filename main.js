// Dynamically load the header
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('headerContainer').innerHTML = html;
  });

// Dynamically load the footer
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footerContainer').innerHTML = html;
  });


document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');
  var nav = document.querySelector('nav');

  menuIcon.addEventListener('click', function() {
    nav.classList.add('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', function() {
    nav.classList.remove('show');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});

