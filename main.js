(()=>{"use strict";var e=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)},t=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)},n=function(e){if("Escape"===e.key){var n=document.querySelector(".popup_is-opened");n&&t(n)}},r=function(e){var n=e.target.closest(".popup");e.target.classList.contains("popup__close")&&n&&t(n)},o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-3",headers:{authorization:"d4c57d4c-4f15-4847-b301-7791a477003b","content-type":"application/json"}},c=function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat((e.status,e.statusText)))},a=function(e){return fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:o.headers}).then(c)},i=function(e,t){e?t.forEach((function(e){e.textContent="Сохранение..."})):t.forEach((function(e){e.textContent="Сохранить"}))},u=document.querySelector("#card-template").content,l=function(e,t,n,r,o){var c=u.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__like-button");c.querySelector(".card__image").src=e.link,c.querySelector(".card__image").alt=e.name,c.querySelector(".card__title").textContent=e.name,c.querySelector(".card__likes").textContent=e.likes.length;var i=c.querySelector(".card__delete-button"),l=e.owner._id===o;return p(e,o)?a.classList.add("card__like-button_is-active"):a.classList.remove("card__like-button_is-active"),l?i.addEventListener("click",(function(){t(e._id,c)})):i.classList.add("card__delete-button__hidden"),a.addEventListener("click",(function(){n(e,o,c)})),c.querySelector(".card__image").addEventListener("click",(function(){r(e.name,e.link)})),c},s=function(e){e.remove()},d=function(e,t,n){var r,a=n.querySelector(".card__likes"),i=n.querySelector(".card__like-button");p(e,t)?(r=e._id,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers}).then(c)).then((function(t){a.textContent=t.likes.length,i.classList.remove("card__like-button_is-active"),e.likes=t.likes})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then(c)}(e._id).then((function(t){a.textContent=t.likes.length,i.classList.add("card__like-button_is-active"),e.likes=t.likes})).catch((function(e){console.log(e)}))},p=function(e,t){return e.likes.some((function(e){return e._id===t}))},f=function(e,t,n){var r=t.querySelector(".".concat(n.id,"-error"));n.classList.remove(e.inputErrorClass),r.classList.remove(e.errorClass),r.textContent=""},_=function(e,t){var n=Array.from(t.querySelectorAll(e.inputSelector));t.querySelector(e.submitButtonSelector).classList.add(e.inactiveButtonClass),n.forEach((function(n){f(e,t,n)}))};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=document.querySelector(".page"),v=document.querySelector(".places__list"),h=document.querySelector("[name='new-place']"),S=document.querySelector("[name='edit-profile']"),b=document.querySelector("[name='edit-avatar']"),q=S.querySelector(".popup__input_type_name"),g=S.querySelector(".popup__input_type_description"),k=h.querySelector(".popup__input_type_card-name"),E=h.querySelector(".popup__input_type_url"),L=document.querySelector(".popup__input_type_avatar"),C=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=document.querySelector(".profile__image"),U=document.querySelector(".profile__edit-button"),w=document.querySelector(".profile__add-button"),j=document.querySelector(".profile__image"),O=document.querySelectorAll(".popup__close"),T=document.querySelector(".popup__button-edit"),B=document.querySelector(".popup__button-add"),D=document.querySelector(".popup__button-edit-avatar"),P=document.querySelector(".popup_type_new-card"),z=document.querySelector(".popup_type_edit"),I=document.querySelector(".popup_type_avatar"),M=document.querySelector(".popup__image"),N=document.querySelector(".popup__caption"),J=document.querySelector(".popup_type_image"),H=function(t,n){M.src=n,M.alt=t,N.textContent=t,e(J)},V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){n.validity.patternMismatch?n.setCustomValidity(n.dataset.errorMessage):n.setCustomValidity(""),n.validity.valid?f(e,t,n):function(e,t,n,r){var o=t.querySelector(".".concat(n.id,"-error"));n.classList.add(e.inputErrorClass),o.classList.add(e.errorClass),o.textContent=r}(e,t,n,n.validationMessage)}(e,t,o),function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(n)?(t.removeAttribute("disabled"),t.classList.remove(e.inactiveButtonClass)):(t.setAttribute("disabled",!0),t.classList.add(e.inactiveButtonClass))}(e,r,n)}))}))}(e,t)}))}(V),S.addEventListener("submit",(function(e){var n,r,a;e.preventDefault(),i(!0,T),(n={name:q.value,about:g.value},r=n.name,a=n.about,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:r,about:a})}).then(c)).then((function(e){C.textContent=e.name,A.textContent=e.about,t(z)})).catch((function(e){console.log(e)})).finally((function(){i(!1,T)}))})),h.addEventListener("submit",(function(e){e.preventDefault(),i(!0,B);var n,r=E.value;(n={name:k.value,link:r},fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(c)).then((function(e){var n=l(e,(function(e,t){a(e).then((function(){s(t)})).catch((function(e){return console.log(e)}))}),d,H,$);v.prepend(n),t(P),h.reset()})).catch((function(e){console.log(e)})).finally((function(){i(!1,B)}))})),b.addEventListener("submit",(function(e){var n;e.preventDefault(),i(!0,D),(n=L.value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:n})}).then(c)).then((function(e){x.style.backgroundImage="url(".concat(e.avatar,")"),t(I),b.reset()})).catch((function(e){console.log(e)})).finally((function(){i(!1,D)}))})),j.addEventListener("click",(function(){_(V,b),e(I)})),U.addEventListener("click",(function(){_(V,S),q.value=C.textContent,g.value=A.textContent,e(z)})),w.addEventListener("click",(function(){_(V,h),h.reset(),e(P)})),Array.from(O).forEach((function(e){e.addEventListener("click",r)})),y.addEventListener("click",(function(e){var n=e.target.closest(".popup");e.target.classList.contains("popup")&&t(n)}));var $="";Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{headers:{Authorization:o.headers.authorization}}).then(c),fetch("".concat(o.baseUrl,"/cards"),{headers:{Authorization:o.headers.authorization}}).then(c)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];$=o._id,C.textContent=o.name,A.textContent=o.about,x.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){var t=l(e,(function(e,t){a(e).then((function(){s(t)})).catch((function(e){return console.log(e)}))}),d,H,$);v.append(t)}))})).catch((function(e){console.log(e)}))})();