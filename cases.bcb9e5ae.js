!function(){function e(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},d=i.parcelRequire48bd;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in a){var i=a[e];delete a[e];var d={id:e,exports:{}};return n[e]=d,i.call(d.exports,d,d.exports),d.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){a[e]=i},i.parcelRequire48bd=d),d.register;var o=d("9qak9");window.matchMedia("(max-width: 765px)").matches&&/*@__PURE__*/e(o)(document).ready(function(){/*@__PURE__*/e(o)(".case-card-module").each(function(){let i=/*@__PURE__*/e(o)(this),n=i.find("> .card-image-container"),a=i.find(".case-description-container");a.addClass("is-hidden"),n.on("click",function(){let d=/*@__PURE__*/e(o)(this),r=d.find(".case-description-container");if(d.hasClass("wide-image")){r.toggleClass("is-hidden");return}if(d.hasClass("narrow-image")){let e=n.filter(".wide-image");n.not(e).not(d),e.removeClass("wide-image").addClass("narrow-image"),d.removeClass("narrow-image").addClass("wide-image"),d.prependTo(i),r.removeClass("is-hidden"),a.not(r).addClass("is-hidden"),function(e,i){let n=i.filter(".wide-image"),a=i.not(n);a.detach(),n.appendTo(e),a.prependTo(e)}(i,n)}})})})}();
//# sourceMappingURL=cases.bcb9e5ae.js.map
