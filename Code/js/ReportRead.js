/*
IPRO 497 - Team E - Spring 2022

Description: 
This file takes data from report table of the database and displays it to the incidents.js page.
*/

// Read reports
(async () => {
  const Reports = Parse.Object.extend('Reports');
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
      console.log(report_date);
      console.log(accident_location);
      console.log(user_id);

      var div = document.createElement("div");
      div.innerHTML = 'Location: (' + accident_location.latitude + ', '+ accident_location.longitude + ') - User ID: ' + user_id + ' - Report Date: ' + report_date;
      incident_display.appendChild(div);
    }
  } catch (error) {
    console.error('Error while fetching Reports', error);
  }
})();