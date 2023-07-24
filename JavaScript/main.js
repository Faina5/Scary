const menub = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menub?.addEventListener('click', () => {
    menu.classList.toggle('menu__list-item--active');
  });

  function readMore(){
    var dots = document.getElementById('dots');
    var more = document.getElementById('more');
    var btn = document.getElementById('btn');
  
    if(dots.style.display === 'none'){
      dots.style.display='inline';
      btn.innerHTML='Читать далее';
      more.style.display='none';
    }
  
    else{
      dots.style.display='none';
      btn.innerHTML='Скрыть';
      more.style.display='inline';
    }
  }