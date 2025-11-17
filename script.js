(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if(mobileBtn && nav){
      mobileBtn.addEventListener('click', function(){
        nav.classList.toggle('mobile-open'); // hiển thị menu
        mobileBtn.classList.toggle('active'); // hiệu ứng hamburger
      });
    }

    // Smooth scroll cho anchor links
    document.addEventListener('click', function(e){
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();
