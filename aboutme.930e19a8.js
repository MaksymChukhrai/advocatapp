const e=document.querySelector(".backdrop"),o=document.querySelectorAll("[data-modal-open]"),t=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal-submit]");function d(){e.classList.add("is-visible"),document.body.classList.add("modal-open"),console.log("Клик по кнопке открытия модального окна")}function n(){e.classList.remove("is-visible"),document.body.classList.remove("modal-open"),console.log("Клик по кнопке закрытия модального окна")}o.forEach(e=>e.addEventListener("click",d)),t.addEventListener("click",n),c.addEventListener("click",n),e.addEventListener("click",function(e){e.currentTarget===e.target&&n()});
//# sourceMappingURL=aboutme.930e19a8.js.map