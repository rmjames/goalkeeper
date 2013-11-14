/*
$(document).ready(function locate(){
  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
        }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  var mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
  var lat = position.coords.latitude;
        var lng = position.coords.longitude;
         
  function success(pos) {
      var map = new google.maps.Map(document.getElementById('loc'), mapOptions);
      var latLng = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      var marker = new google.maps.Marker({position: latLng, map: map});
      map.setCenter(latLng);
      
  };
   
  function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
  };
   
  navigator.geolocation.getCurrentPosition(success, error, options);
})
*/

var initialLocation;
      var siberia = new google.maps.LatLng(60, 105);
      var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
      var map;
      var infowindow = new google.maps.InfoWindow();
      var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
      var mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 30000
      };
      
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, onError, options);
        // also monitor position as it changes
        navigator.geolocation.watchPosition(showPosition);
      } else {
        onError();
      }
      
      function showPosition(position) {
        map = new google.maps.Map(document.getElementById("loc"), mapOptions);

        
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        initialLocation = new google.maps.LatLng(lat, lng);
        map.setCenter(initialLocation);

        /*var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title:"Hello World!"
      });*/

        infowindow.setContent('Here You Are!');
        infowindow.setPosition(initialLocation);
        infowindow.open(map);
      }
      
      function onError() {
        if (navigator.geolocation) {
          initialLocation = newyork;
          contentString = "Error: The Geolocation service failed.";
        } else {
          initialLocation = siberia;
          contentString = "Error: Your browser doesn't support geolocation. Are you in Siberia?";
        }
        mapOptions.zoom = 4;
        map = new google.maps.Map(document.getElementById("loc"), mapOptions);
        map.setCenter(initialLocation);
        infowindow.setContent(contentString);
        infowindow.setPosition(initialLocation);
        infowindow.open(map);
      }
