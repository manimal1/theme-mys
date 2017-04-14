function createGoogleMap() {

    // Create the map
    // No need to specify zoom and center as we fit the map further down.
	var Boja = [
  		{
    	featureType: "road",
    	stylers: [ { visibility: "off" } ]
  	  },
  	  {
		featureType: "all",
		stylers: [ { "hue": "#0066ff" } ]
	  }/*,
	  {
		featureType: "administrative.city",
 		elementType: "labels",
 		stylers: [ { visibility: "off" } ]
	  }*/
	];
    var mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(43.815992, 15.600231),
      zoom: 14,
      styles: Boja,
      streetViewControl: false,
	  zoomControl: false,
	  scrollwheel: false,
	  disableDoubleClickZoom: true
    };
    var map = new google.maps.Map(document.getElementById("MapCanvas"),
       mapOptions);

    // Define the list of markers.
    // This could be generated server-side with a script creating the array.

	var Porec = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(5,5));
	var Rovinj = new google.maps.MarkerImage('/images/MarkerV.png', new google.maps.Size(20,21), new google.maps.Point(0,0), new google.maps.Point(10,5));
	var Pula = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(5,5));
	var Zadar = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(5,5));
	var Sibenik = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(8,10));
	var Trogir = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(8,10));
	var Split = new google.maps.MarkerImage('/images/MarkerV.png', new google.maps.Size(20,21), new google.maps.Point(0,0), new google.maps.Point(10,15));
	var Vis = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(2,10));
	var Hvar = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(5,10));
	var Korcula = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(5,2));
	var Dubrovnik = new google.maps.MarkerImage('/images/MarkerV.png', new google.maps.Size(20,21), new google.maps.Point(0,0), new google.maps.Point(5,15));
	var Cavtat = new google.maps.MarkerImage('/images/MarkerM.png', new google.maps.Size(15,14), new google.maps.Point(0,0), new google.maps.Point(5,10));

    var markers = [
      { lat: 45.227181, lng: 13.59468, name: "<p style='color:#000;'>Poreč<br>45°13′50″N  13°35′53″E<br>Port – VHF: 09</p>", icon: Porec },
      { lat: 45.081218, lng: 13.638711, name: "<p style='color:#000;'>Rovinj<br>45°4′60″N  13°37′60″E<br>Port – VHF: 09 & 16<br>ACI Marina – VHF: 17<br><br>Contact info:<br>info@myscroatia.com;<br>+385 99 502 3127;<br>+385 98 912 5198</p>", icon: Rovinj },
      { lat: 44.867063, lng: 13.849983, name: "<p style='color:#000;'>Pula<br>44°52′60″N  13°48′0″E<br>Port – VHF: 09 & 16<br>ACI Marina – VHF: 17</p>", icon: Pula },
      { lat: 44.119142, lng: 15.233231, name: "<p style='color:#000;'>Zadar<br>44°7′0″N  15°13′0″E<br>Port – VHF: 09</p>", icon: Zadar },
      { lat: 43.735631, lng: 15.895157, name: "<p style='color:#000;'>Šibenik<br>43°43′60″N  15°52′60″E<br>Port – VHF: 09</p>", icon: Sibenik },
      { lat: 43.517062, lng: 16.250153, name: "<p style='color:#000;'>Trogir<br>43° 31' 0”N   16° 15' 0”E</p>", icon: Trogir },
      { lat: 43.508597, lng: 16.440353, name: "<p style='color:#000;'>Split<br>43°30′0″N  16°25′60″E<br>Port – VHF: 09 & 16<br>ACI Marina – VHF: 17<br><br>Contact info:<br>info@myscroatia.com;<br>+385 99 502 3127;<br>+385 98 912 5198</p>", icon: Split },
      { lat: 43.042547, lng: 16.133766, name: "<p style='color:#000;'>Vis<br>43° 3′ 0″ N   16° 11′ 0″E</p>", icon: Vis },
      { lat: 43.172259, lng: 16.440783, name: "<p style='color:#000;'>Hvar<br>43°10′6″N  16°26′26″E<br>Port – VHF: 09 & 16<br>ACI Marina – VHF: 17</p>", icon: Hvar },
      { lat: 42.958935, lng: 17.134209, name: "<p style='color:#000;'>Korčula<br>42°55′60″N  17°7′60″E<br>ACI Marina – VHF: 17</p>", icon: Korcula },
      { lat: 42.650879, lng: 18.094482, name: "<p style='color:#000;'>Dubrovnik<br>42°40′0″N  18°4′60″E<br>Port – VHF: 09<br><br>Contact info:<br>info@myscroatia.com;<br>+385 99 502 3127;<br>+385 98 912 5198</p>", icon: Dubrovnik },
      { lat: 42.581147, lng: 18.217564, name: "<p style='color:#000;'>Cavtat<br>42 34’ 57”N   18 12’ 58”E<br>Port – VHF: 09</p>", icon: Cavtat }
    ];

	// Ikone
	// http://maps.google.com/mapfiles/ms/icons/red-dot.png
	// http://maps.google.com/mapfiles/ms/icons/green-dot.png
	// http://maps.google.com/mapfiles/ms/icons/blue-dot.png


    // Create the markers ad infowindows.
    for (index in markers) addMarker(markers[index]);
    function addMarker(data) {
      // Create the marker
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.lng),
        map: map,
        icon: data.icon

      });

      // Create the infowindow with two DIV placeholders
      // One for a text string, the other for the StreetView panorama.
      var content = document.createElement("DIV");
      var title = document.createElement("DIV");
      title.innerHTML = data.name;
      content.appendChild(title);
      //var streetview = document.createElement("DIV");
      //streetview.style.width = "200px";
      //streetview.style.height = "200px";
      //content.appendChild(streetview);
      var infowindow = new google.maps.InfoWindow({
        content: content
      });

      // Open the infowindow on marker click
      google.maps.event.addListener(marker, "mouseover", function() {
        infowindow.open(map, marker);
      });
	  google.maps.event.addListener(marker, 'mouseout', function() {
    	infowindow.close();
	  });

      // Handle the DOM ready event to create the StreetView panorama
      // as it can only be created once the DIV inside the infowindow is loaded in the DOM.
      google.maps.event.addListenerOnce(infowindow, "domready", function() {
        var panorama = new google.maps.StreetViewPanorama(streetview, {
            navigationControl: false,
            enableCloseButton: false,
            addressControl: false,
            linksControl: false,
            visible: true,
            position: marker.getPosition()
        });
      });
    }

    // Zoom and center the map to fit the markers
    // This logic could be conbined with the marker creation.
    // Just keeping it separate for code clarity.
    var bounds = new google.maps.LatLngBounds();
    for (index in markers) {
      var data = markers[index];
      bounds.extend(new google.maps.LatLng(data.lat, data.lng));
    }
    map.fitBounds(bounds);
  }
