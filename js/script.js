var gllacyMap;
var gllacyPlacemark;

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
