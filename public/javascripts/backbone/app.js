var Haystack = Haystack || { Models: {}, Collections: {}, Views: {} };

Haystack.initialize = function() {
  var collection = new Haystack.Collections.MapCollection();

  collection.fetch({success: function(){
    console.log(collection.models[0].attributes.pins[0]);
  }})

  var listView = new Haystack.Views.MapListView({
    collection: collection,
    el: $('.map_list_ul')
  });

$(".new_map_form").on("submit", function(e){
  e.preventDefault();
  var map_name= $(".new_map_form").find('input').val();
  console.log(map_name);
  map_view = new Haystack.Views.MapView({
      el: $('#map-canvas')[0],
      new_map_name: map_name
  });
    map_view.renderCurrentLocation(map_name);
    $(".new_map_form").find('input').val("");
  });

}

$(function() {

  Haystack.initialize();



// var geocoder;
// var map;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(-34.397, 150.644);
//   var mapOptions = {
//     zoom: 8,
//     center: latlng
//   }
//   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//   google.maps.event.addListener(map, 'click', function(event) {
//   marker(event.latLng);
// });
// }

// function codeAddress() {
//   var address = document.getElementById('address').value;
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       var lat = results[0].geometry.location.lat();
//       var longitude = results[0].geometry.location.lng();
//       var coordinates = results[0].geometry.location.toString();
//       console.log(coordinates);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }

// function marker(location) {
//       var marker = new google.maps.Marker({
//       position: location,
//       map: map
//     });
//       console.log(location.toString());
// }

// $("#submit").on("click", function() {
//   codeAddress();
// })


});
