
  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    // const uluru = { lat: -25.344, lng: 131.036 }; -- can create markers manually this way but we dont need
    // The map, centered at MTCC 41.83528875213209, -87.62582573024567
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.835, lng: -87.626 },
      zoom: 13
    });
	const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
    const transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
   
   const robbery1 = new google.maps.Marker({
    position:  { lat: 41.83135172391024, lng:  -87.62640991620079 },
    map: map,
	title: "Robbery",
	animation: google.maps.Animation.BOUNCE,
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
 
  }
