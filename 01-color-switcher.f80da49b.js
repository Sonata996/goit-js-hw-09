function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e=document.querySelector("body"),r=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let a=null;r.addEventListener("click",(function(){e.style.backgroundColor=t(),document.querySelector("[data-start]").disabled=!0,a=setInterval((()=>{e.style.backgroundColor=t()}),1e3)})),o.addEventListener("click",(function(){clearInterval(a),document.querySelector("[data-start]").disabled=!1}));
//# sourceMappingURL=01-color-switcher.f80da49b.js.map
