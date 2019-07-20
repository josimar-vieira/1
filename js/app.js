const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
 
$(function(){


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
 
function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
  target.forEach((element) => {
    console.log('data-anime ativada qnd temos o window')
    if(windowTop > element.offsetTop) {
      element.classList.add(animationClass);
      // console.log('add ativado')
    } 
     // else {element.classList.remove(animationClass);}
      
      
    
  })
};
 
animeScroll();
 
const handleScroll = debounce(animeScroll,200);

 
if(target.length) {
  window.addEventListener('scroll', handleScroll);
  
}
})





















