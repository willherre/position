function initialize() {
        
        var mapOptions = {
          center: new google.maps.LatLng(18.252777, -66.5022),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions); 
      }