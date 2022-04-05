
  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    // const uluru = { lat: -25.344, lng: 131.036 }; -- can create markers manually this way but we dont need
    // The map, centered at MTCC 41.83528875213209, -87.62582573024567
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.835, lng: -87.626 },
      zoom: 15
    });
    // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    // });
    const ctaLayer = new google.maps.KmlLayer({
    url: "https://www.google.com/maps/d/u/1/kml?forcekml=1&mid=1JHet-vdWR1OvLKNCepH2V8lrwHutU2UY",
    map: map,
  });
  }
