document.addEventListener("DOMContentLoaded",()=>{let e=window.location.pathname.split("/").pop(),t=document.getElementById("service");if(t){let n=t.options;for(let t=0;t<n.length;t++)if(n[t].getAttribute("data-url")===e){n[t].selected=!0;break}t.addEventListener("change",()=>{let e=t.options[t.selectedIndex].getAttribute("data-url");e&&(window.location.href=e)})}});
//# sourceMappingURL=administrative-law.154ba8bc.js.map
