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
