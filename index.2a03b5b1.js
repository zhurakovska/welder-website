document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n,o,c=e.getAttribute("href").slice(1);n=c,o=document.getElementById(n).getBoundingClientRect().top,window.scrollBy({top:o,left:0,behavior:"smooth"})}))}));
//# sourceMappingURL=index.2a03b5b1.js.map
