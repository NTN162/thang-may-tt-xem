document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('[data-tt-burger]');
  var nav = document.querySelector('.tt-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.style.display = nav.style.display === 'block' ? '' : 'block';
    });
  }
});
