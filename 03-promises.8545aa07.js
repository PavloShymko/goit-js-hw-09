!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i={form:document.querySelector(".form"),btn:document.querySelector('[type="submit"]')};function a(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault(),i.btn.setAttribute("disabled",!0);var t=+e.currentTarget.elements.step.value,n=+e.currentTarget.elements.amount.value,o=+e.currentTarget.elements.delay.value;setTimeout((function(){i.btn.removeAttribute("disabled")}),n*t+o);for(var u=0;u<=n;u+=1)a(u,o).then((function(e){var t=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.8545aa07.js.map