
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
  //   const ctaLayer = new google.maps.KmlLayer({
  //   url: "https://github.com/mboufal/IPRO-Commuter-Safety/raw/main/Code/iPro.kmz",
  //   map: map,
  // });



  

  

console.log("Here")

// Here we query for all the reports to be placed as markers
async function asyncCall() {
  const Reports = Parse.Object.extend('Reports');
  const Accidents = Parse.Object.extend('Accidents');
  const query = new Parse.Query(Reports);
  console.log("Made it here");
  try {
    const results = await query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const report_date = object.get('report_date').toLocaleString();
      const accident_location = object.get('accident_location');
      const accident_description = object.get('description');
      const accident_id = object.get('accident_id');
      let accident_title = "";
      console.log(report_date);
      console.log(accident_location);
      console.log(accident_description);

      if (accident_id == "A1") {
        accident_title = "Robbery";
      }
      else if (accident_id == "A2") {
        accident_title = "Assault";
      } 
      else if (accident_id == "A3") {
        accident_title = "Verbal Harassment";
      } 
      else if (accident_id == "A4") {
        accident_title = "Flu Outbreak";
      } 
      else if (accident_id == "A5") {
        accident_title = "Paintball Shooting";
      }

      // create the marker
      console.log(accident_title);

      // this is the onlu way to create a marker info window
      const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' + accident_title + '</h1>' +
    '<div id="bodyContent">' +
    "<p>Description: " + accident_description + "</p>" +
    "<p>Report submitted: <b>" + report_date + "</b></p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });



      const marker = new google.maps.Marker({
        position: { lat: accident_location["_latitude"], lng: accident_location["_longitude"] },
        map: map,
        title: accident_title,
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    
    }
  } catch (error) {
    console.error('Error while fetching Reports', error);
  }}

  asyncCall();
  window.initMap = initMap;

}