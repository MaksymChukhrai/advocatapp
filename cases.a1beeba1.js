function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},t=n.parcelRequire48bd;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return i[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){a[e]=n},n.parcelRequire48bd=t),t.register;var o=t("aaQnt");const s=()=>window.matchMedia("(min-width: 768px)").matches,d=()=>{/*@__PURE__*/e(o)(".card-image-pc-container").odd().addClass("is-odd")},r=e=>{m(e,()=>{e.addClass("is-hidden")})},c=e=>e.hasClass("is-odd"),l=function(n){let i=n.find(".case-description-container"),a=/*@__PURE__*/e(o)(".case-description-container:not(.is-hidden)"),t=c(n);r(a),i.hasClass("is-hidden")&&(t?i.css("transform","translateX(-26vw)"):i.css("transform","translateX(0)"),m(i,()=>{i.removeClass("is-hidden")}))},f=function(n){let i=n.find(".case-description-container"),a=/*@__PURE__*/e(o)(".case-description-container:not(.is-hidden)").not(i),t=n.siblings(".card-image-pc-container").not(n),s=c(n);r(a),u(n,t,()=>{n.removeClass("narrow-image").addClass("wide-image"),t.removeClass("wide-image").addClass("narrow-image"),console.log(s),s?i.css("transform","translateX(-26vw)"):i.css("transform","translateX(0)"),m(i,()=>{i.removeClass("is-hidden")})})},u=function(e,n,i=()=>{}){let a=e.outerWidth(),t=n.outerWidth();e.animate({width:a+t},{duration:500}),n.animate({width:0},{duration:500,complete:i})},m=function(e,n=()=>{}){e.animate({height:"toggle",opacity:"toggle"},{duration:500,complete:n})};/*@__PURE__*/e(o)(document).ready(function(){s()&&(d(),/*@__PURE__*/e(o)(".case-card-pc-module").on("click",".card-image-pc-container",function(){let n=/*@__PURE__*/e(o)(this);n.hasClass("wide-image")?l(n):f(n)}))});
//# sourceMappingURL=cases.a1beeba1.js.map
