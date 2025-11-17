(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if(mobileBtn && nav){
      mobileBtn.addEventListener('click', function(){
        const isOpen = nav.classList.toggle('mobile-open');
        mobileBtn.classList.toggle('active', isOpen);
      });
    }
  });

  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
})();