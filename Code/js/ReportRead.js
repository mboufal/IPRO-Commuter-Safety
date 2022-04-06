/*
IPRO 497 - Team E - Spring 2022

Description: 
This file takes data from report table of the database and displays it to the incidents.js page.
*/

// Read reports
(async () => {
  const Reports = Parse.Object.extend('Reports');
  const Accidents = Parse.Object.extend('Accidents');
  const query = new Parse.Query(Reports);
  var incident_display = document.getElementById("incidents");
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const report_date = object.get('report_date').toLocaleString();
      const accident_location = object.get('accident_location');
      const user_id = object.get('user_id');
      const accident_id = object.get('accident_id');
      let accident_title = "";
      console.log(report_date);
      console.log(accident_location);
      console.log(user_id);

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

      var div = document.createElement("div");
      div.innerHTML = accident_title + ' - (' + accident_location.latitude + ', '+ accident_location.longitude + ') - ' + report_date;
      incident_display.appendChild(div);
    }
  } catch (error) {
    console.error('Error while fetching Reports', error);
  }
})();