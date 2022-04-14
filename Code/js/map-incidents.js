
  // Initialize and add the map
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.835, lng: -87.626 },
      zoom: 15,
    });
	
	const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
    const transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
	
   const robbery = new google.maps.Marker({
    position:  { lat: 41.83135172391024, lng:  -87.62640991620079 },
    map: map,
	title: "Robbery",
	animation: google.maps.Animation.DROP,
	label: "1",
  });
const assault = new google.maps.Marker({
    position:  { lat: 41.838075139495025, lng: -87.62493056354852 },
    map: map,
	title: "Assault",
	animation: google.maps.Animation.DROP,
	label: "2",
  });
const flu = new google.maps.Marker({
    position:  { lat: 41.83159373316756,  lng: -87.6273170330335 },
    map: map,
	title: "Flu Outbreak",
	animation: google.maps.Animation.DROP,
	label: "3",
  });
  const harassment = new google.maps.Marker({
    position:  { lat: 41.83302466916122,  lng:  -87.62671621821612 },
    map: map,
	title: "verbal harassment",
	animation: google.maps.Animation.DROP,
	label: "4",
  });
  }
