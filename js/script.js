var gllacyMap;
var gllacyPlacemark;

var link = document.querySelector(".contacts__btn");
var modal = document.querySelector(".modal-feedback");
var close = modal.querySelector(".modal-feedback__btn-close");
var username = modal.querySelector("[name=user-name]");
var form = modal.querySelector("form");
var email = modal.querySelector("[name=user-email]");
var message = modal.querySelector("[name=beedback]");
var overlay =document.querySelector(".overlay");

ymaps.ready(function () {
  gllacyMap = new ymaps.Map("map", {
    center: [59.939346, 30.329182],
    zoom: 16,
    controls: ['smallMapDefaultSet']
  }),
  gllacyPlacemark = new ymaps.Placemark(([59.938631, 30.323055]), {
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/pin-with-shadow.png",
    iconImageSize: [218, 142],
    iconImageOffset: [-40, -139]
  });
  gllacyMap.geoObjects.add(gllacyPlacemark);
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-feedback--open");
  overlay.classList.add("overlay--open");
  username.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-feedback--open");
  overlay.classList.remove("overlay--open");
  modal.classList.remove("modal-feedback--error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) {
  evt.preventDefault();
  modal.classList.remove("modal-feedback--error");
  modal.offsetWidth = modal.offsetWidth;
  modal.classList.add("modal-feedback--error");
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-feedback--open")) {
      modal.classList.remove("modal-feedback--open");
      overlay.classList.remove("overlay--open");
      modal.classList.remove("modal-feedback--error");
    }
  }
});
