const h={it:{comparazioni:{en:"comparison"},classifiche:{en:"standing"},guide:{en:"guide"},accademia:{en:"academy"}},en:{comparison:{it:"comparazioni"},standing:{it:"classifiche"},guide:{it:"guide"},academy:{it:"accademia"}}},u=typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):"light",p=document.getElementsByTagName("body")[0];p.setAttribute("data-theme",u);const o=document.querySelector("input.toggle");o.addEventListener("click",()=>{localStorage.theme=o.checked?"light":"dark",window.location.reload()});localStorage.theme==="light"&&(o.checked=!0);const l=document.getElementsByClassName("change-locale");for(let t=0;t<l.length;t++)l[t].addEventListener("change",function(s){const c=s.target.value,a=`${c}`,e=document.location,[,n,i,...d]=e.pathname.split("/");if(n&&i){if(a!==n){const g=h[n][i][c]||null,m=e.pathname,r=`/${a}/${g}/${d.join("/")}`;e.pathname=e.pathname.replace(m,r)}}else e.pathname=`${a}/`});
