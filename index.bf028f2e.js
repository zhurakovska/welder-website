document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();!function(e){const t=document.getElementById(e).getBoundingClientRect().top;window.scrollBy({top:t,left:0,behavior:"smooth"})}(e.getAttribute("href").slice(1))}))}));
//# sourceMappingURL=index.bf028f2e.js.map
