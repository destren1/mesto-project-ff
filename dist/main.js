(()=>{"use strict";var e,t,r,n,o={803:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},894:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},884:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},955:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},586:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},399:e=>{e.exports="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e](r,r.exports,a),r.exports}a.m=o,a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.b=document.baseURI||self.location.href,e=[{name:"Архыз",link:new URL(a(803),a.b)},{name:"Челябинская область",link:new URL(a(884),a.b)},{name:"Иваново",link:new URL(a(955),a.b)},{name:"Камчатка",link:new URL(a(586),a.b)},{name:"Холмогорский район",link:new URL(a(399),a.b)},{name:"Байкал",link:new URL(a(894),a.b)}],t=document.querySelector(".places__list"),r=document.querySelector("#card-template").content,n=function(e){e.remove()},e.forEach((function(e){var o,s,a,c=(o=e,s=n,(a=r.querySelector(".card").cloneNode(!0)).querySelector(".card__image").src=o.link,a.querySelector(".card__image").alt=o.name,a.querySelector(".card__title").textContent=o.name,a.querySelector(".card__delete-button").addEventListener("click",(function(){s(a)})),a);t.append(c)}))})();