document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');
  var nav = document.querySelector('nav');

  console.log("ggggggggggggggggggg")

  menuIcon.addEventListener('click', function() {
    console.log("ddhdhhdhdhd")
    nav.classList.add('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  console.log("hhhhhhhhhhhhhhhhhhh")


  closeIcon.addEventListener('click', function() {
    nav.classList.remove('show');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});
