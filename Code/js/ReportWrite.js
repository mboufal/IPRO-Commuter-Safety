/*
IPRO 497 - Team E - Spring 2022

Description: 
This file takes data from report-form.html and creates a report in the database.
*/

// Prompt user to permit geolocation coordinates via their browser
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(populatePosition);
    return true;
  } else {
    return false;
  }
}

// Populate the form and the model with the coordinate data
function populatePosition(position) {
  let lat = parseFloat(position.coords.latitude); 
  let long = parseFloat(position.coords.longitude); 

  document.getElementById("lat").value = lat;
  document.getElementById("long").value = long;
}

// Create a new Report
async function createParseReport() {
  // Create new Parse object: "Report"
  let report = new Parse.Object("Reports");
  console.log("report object created");
  let user_id = parseInt(document.getElementById("user-id").value);
  let report_id = parseInt(document.getElementById("report-id").value);
  let lat = parseFLoat(document.getElementById("lat").value);
  let long = parseFloat(document.getElementById("long").value);


  // Set the input values to the new "Report" object
  report.set("user_id", user_id);
  report.set("accident_location", new Parse.GeoPoint({latitude: lat, longitude: long}));
  report.set("report_date", new Date());

  report.set("report_id", report_id);

  console.log('Data input: ', user_id, report_id, lat, long);
  console.log('Report id: ', report.get("user_id"));

  try {
    // Call the save method, which returns the saved object if successful
    report = await report.save();
    console.log('Result: ', report.get("objectId"));
    if (report !== null) {
      // Notify the success by getting the attributes from the "Report" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(
        `New report created with success! Report ID: ${report.id}`
      );
      console.log('Reports created', report);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// on click listener for location permission prompt
document.getElementById("locate").addEventListener("click", async function () {
  getLocation();
});

// Add on click listener to call the create parse report function
document.getElementById("submit").addEventListener("click", async function () {
  createParseReport();
});