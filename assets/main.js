
const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.mobile-menu');
if(toggle&&menu){toggle.addEventListener('click',()=>{menu.classList.toggle('open');toggle.setAttribute('aria-expanded',menu.classList.contains('open')?'true':'false')})}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
