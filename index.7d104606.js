var e=document.querySelector(".backdrop"),t=document.querySelectorAll("[data-modal-open]"),d=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal-submit]");function n(){e.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function o(){e.classList.add("is-hidden"),document.body.classList.remove("modal-open")}t.forEach(function(e){return e.addEventListener("click",n)}),d.addEventListener("click",o),c.addEventListener("click",o),e.addEventListener("click",function(e){e.currentTarget===e.target&&o()});
//# sourceMappingURL=index.7d104606.js.map
